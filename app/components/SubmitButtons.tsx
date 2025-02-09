
"use client";

import { Button } from "@/components/ui/button";
import GoogleLogo from "/assets/GoogleLogo.png"
import GitHubLogo from "/assets/GitHubLogo.png"
import { Loader2 } from "lucide-react";
import Image from "next/image";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

interface iAppProps{
    text: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    className?: string;

}

export function SubmitButton({text, variant, className}: iAppProps) {
    const {pending} = useFormStatus();

    return (
        <>
        {pending? (
            <Button disabled variant="outline" className={cn("w-fit", className)}>
                <Loader2 className="size-4 mr-2 animate-spin" /> Please Wait
            </Button>
        ):(
            <Button type="submit" variant={variant} className={cn("w-fit", className)}>{text}</Button>
        )}
        </>
    )

}

export function GoogleAuthButton() {
    const {pending} =useFormStatus();

    return (
        <>
        {pending?(
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="mr-2 size-4 animate-spin" /> Please Wait
            </Button>
        ):(
            <Button variant="outline" className="w-full">
                <Image src={GoogleLogo} alt="Google" className="size-4 mr-2 "/>
                Sign In with Google</Button>)}
        </>
    )
}

export function GitHubAuthButton() {
    const {pending} =useFormStatus();

    return (
        <>
        {pending?(
            <Button disabled variant="outline" className="w-full">
                <Loader2 className="mr-2 size-4 animate-spin" /> Please Wait
            </Button>
        ):(
            <Button variant="outline" className="w-full">
                <Image src={GitHubLogo} alt="GitHub" className="size-4 mr-2 "/>
                Sign In with GitHub</Button>)}
        </>
    )
}