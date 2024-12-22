import prisma from "@/app/lib/db";
import { requiredUser } from "@/app/lib/hooks";
import { nylas, nylasConfig } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    const session = await requiredUser();

    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if(!code) {
        return Response.json("No Authentication Code Received", { status: 400 });
    }

    try {
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: nylasConfig.apiKey,
            clientId: nylasConfig.clientId,
            redirectUri: nylasConfig.redirectUri,
            code: code,
        })
        const {grantId, email} = response;

        await prisma.user.update({
            where:{
                id: session.user?.id
            },
            data:{
                grandId: grantId,
                grantEmail: email,
            }
        })
    }
    catch (error) {
        console.log("Error something went wrong", error);
    }

    redirect("/dashboard");
}