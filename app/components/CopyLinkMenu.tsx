"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

export function CopyLinkMenuItem({meetingUrl} : {meetingUrl: string}) {

    const  handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(meetingUrl);
            toast.success("Url has been copied");
        }catch (err) {
            console.log("Could not copy the Url")
        }
    }

    return (
        <DropdownMenuItem onSelect={handleCopy}>
            <Link2 className="mr-2 size-4"/>
            Copy
        </DropdownMenuItem>
    )

}