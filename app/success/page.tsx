import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Card className="max-w-[400px] w-full mx-auto">
                <CardContent className="p-6 flex flex-col w-full items-center">
                    <div className="size-16 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Check className="size-8 text-green-500"/>
                    </div>
                    <h1 className="text-2xl font-semibold mt-4">This Event is Scheduled</h1>
                    <p className="text-muted-foreground text-sm mt-1"> We emailed you about this event</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild>
                        <Link href="/">Close this page</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}