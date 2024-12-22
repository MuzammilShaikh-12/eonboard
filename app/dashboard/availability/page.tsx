import { updateAvailablityAction } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import prisma from "@/app/lib/db";
import { requiredUser } from "@/app/lib/hooks";
import { times } from "@/app/lib/times";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { notFound } from "next/navigation";

const timeArray = times.flat();


async function getData(userId: string) {
    const data = await prisma.availability.findMany({
        where: {
            userId: userId,
        },
    });

    if(!data) {
        return notFound();
    }
    return data;
}

export default async function AvailabilityRoute() {
    const session = await requiredUser();

    const data = await getData(session.user?.id as string);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>
                    In this section you can manage your availability.
                </CardDescription>
            </CardHeader>
            <form action={updateAvailablityAction}>
                <CardContent>
                    {data.map((item)=> (
                        <div key={item.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
                            <input type="hidden" name={`id-${item.id}`} value={item.id}/>
                            <div className="grid grid-cols-2 items-center py-4">
                                <p>{item.day}</p>
                                <Switch name={`isActive-${item.id}`} defaultChecked={item.isActive}/>
                            </div>
                            <Select name={`fromTime-${item.id}`} defaultValue={item.fromTime}>
                                <SelectTrigger className="w-[180]">
                                    <SelectValue placeholder="From Time"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {timeArray.map((time) => (
                                            <SelectItem value={time.time} key={time.id}>
                                                {time.time} 
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select name={`tillTime-${item.id}`} defaultValue={item.tillTime}>
                                <SelectTrigger className="w-[180]">
                                    <SelectValue placeholder="Till Time"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {timeArray.map((time) => (
                                            <SelectItem value={time.time} key={time.id}>
                                                {time.time} 
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Save Changes"/>
                </CardFooter>
            </form>
        </Card>
    )
}