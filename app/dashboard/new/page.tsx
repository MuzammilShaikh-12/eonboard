"use client";

import { CreateEventTypeAction } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { eventTypeSchema } from "@/app/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Link from "next/link";
import { useActionState, useState } from "react";

type VideoCallProvider = "Zoom Meeting" | "Google Meet" | "Microsoft Teams";

export default function NewEventRoute() {
    const [activePlatform, setActivePlatform] = useState<VideoCallProvider>("Google Meet");

    const [lastResult, action] = useActionState(CreateEventTypeAction, undefined);

    const [form, fields] = useForm({
        lastResult,

        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: eventTypeSchema,
            });
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })

    return (
        <div className="w-full h-full items-center flex flex-1 justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Add new appointment</CardTitle>
                    <CardDescription>
                        Create new appointment type that allows user to book you!
                    </CardDescription>
                </CardHeader>

                <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
                    <CardContent className="grid gap-y-5">
                        <div className=" flex flex-col gap-y-2">
                            <Label>Title</Label>
                            <Input 
                            name={fields.title.name} 
                            key={fields.title.key}
                            defaultValue={fields.title.initialValue} 
                            placeholder="30 Minute meeting" />
                            <p className="text-red-500 text-sm">{fields.title.errors}</p>
                        </div>

                        <div className=" flex flex-col gap-y-2">
                            <Label>URL Slug</Label>
                            <div className="flex rounded-md">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-muted bg-muted px-3 text-muted-foreground text-sm">
                                    EonBoard.com/
                                </span>
                                <Input
                                name={fields.url.name} 
                                key={fields.url.key}
                                defaultValue={fields.url.initialValue}
                                className="rounded-l-none" placeholder="Example-url-1"/>
                            </div>
                            <p className="text-red-500 text-sm">{fields.url.errors}</p>
                        </div>

                        <div className=" flex flex-col gap-y-2">
                            <Label>Description</Label>
                            <Textarea 
                            name={fields.description.name} 
                            key={fields.description.key}
                            defaultValue={fields.description.initialValue}
                            placeholder="Meet me in the meeting room"/>
                            <p className="text-red-500 text-sm">{fields.description.errors}</p>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Duration</Label>
                            <Select
                            name={fields.duration.name} 
                            key={fields.duration.key}
                            defaultValue={fields.duration.initialValue}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a duration"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Duration</SelectLabel>
                                        <SelectItem value="15">15 minutes</SelectItem>
                                        <SelectItem value="30">30 minutes</SelectItem>
                                        <SelectItem value="45">45 minutes</SelectItem>
                                        <SelectItem value="60">1 Hour</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                                <p className="text-red-500 text-sm">{fields.duration.errors}</p>
                            </Select>
                        </div>

                        <div className="grid gap-y-2">
                            <Label>Video Call Provider</Label>
                            <input type="hidden" name={fields.videoCallSoftware.name} value={activePlatform} />
                            <ButtonGroup>
                                <Button 
                                type="button"
                                variant={
                                    activePlatform === "Zoom Meeting" ? "secondary" : "outline"
                                }
                                onClick={() => setActivePlatform("Zoom Meeting")} className="w-full">Zoom
                                </Button>
                                
                                <Button 
                                type="button"
                                variant={
                                    activePlatform === "Google Meet" ? "secondary" : "outline"
                                }
                                onClick={() => setActivePlatform("Google Meet")}
                                className="w-full">Google Meet</Button>

                                <Button
                                type="button"
                                variant={
                                    activePlatform === "Microsoft Teams" ? "secondary" : "outline"
                                }
                                onClick={() => setActivePlatform("Microsoft Teams")}
                                className="w-full">Microsoft Teams</Button>
                            </ButtonGroup>
                            <p className="text-red-500 text-sm">{fields.videoCallSoftware.errors}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex justify-between">
                        <Button variant="secondary" asChild>
                            <Link href="/dashboard">Cancel</Link>
                        </Button>
                        <SubmitButton text="Create Event Type"/>
                    </CardFooter>
                </form>

            </Card>
        </div>
    )
}