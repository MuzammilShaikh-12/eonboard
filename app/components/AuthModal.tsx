

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Eonboard from '@/public/assets/EonBoard.png'
import Image from "next/image";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";


export function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                <Image src={Eonboard} alt="Eonboard" className="size-12 "/>
                <h4 className="text-3xl font-semibold ">
                    Eon<span className="text-primary">Board</span>
                </h4>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    <form className=" w-full" action={async () => {
                        "use server"
                        await signIn("google");
                    }}>
                        
                    <GoogleAuthButton/>
                    </form>
                    <form action={async () => {
                        "use server";
                        await signIn("github");
                    }}>
                    <GitHubAuthButton/>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}