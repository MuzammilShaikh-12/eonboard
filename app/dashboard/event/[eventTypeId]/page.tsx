import { EditEventForm } from "@/app/components/EditEventTypeForm";
import prisma from "@/app/lib/db"
import { notFound } from "next/navigation"

type Params = Promise<{
    eventParams: {
        eventTypeId: string
    };
}>;

async function getData(eventTypeId: string) {
    const data = await prisma.eventType.findUnique({
        where: {
            id: eventTypeId,
        },
        select: {
            title: true,
            description: true,
            duration: true,
            url: true,
            id: true,
            videoCallSoftware: true,
        }
    })

    if(!data) {
        return notFound();
    }

    return data;
}

export default async function EditRoute({params} : {params: Params}) {

    const { eventParams } = await params;

    const data = await getData(eventParams.eventTypeId);
    return (
        <EditEventForm id={data.id} title={data.title} description={data.description} duration={data.duration} url={data.url} callProvider={data.videoCallSoftware}/>
    )
}