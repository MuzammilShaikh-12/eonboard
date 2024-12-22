import { AuthModal } from "./AuthModal";
import EonBoard from '@/public/assets/EonBoard.png'
import Image from "next/image";


export function Hero() {

    return (
        <section className="relative flex flex-col items-center justify-center py-12 lg:py-20">
            <div className="text-center">
                <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
                Introducing EonBoard
                </span>
                <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
                    Scheduling made <span className="text-primary block -mt-2">super easy</span>
                </h1>
                <p className="max-w-xl mx-auto mt-4 lg:text-lg text-muted-foreground">Scheduling a meeting can be a pain, but we at EonBoard make it easy for your clients to schedule a meeting with you</p>

                <div className="mt-5 mb-12">
                    <AuthModal/>
                </div>
            </div>

            <div className="relative items-center w-full py-12 mx-auto mt-12">
                <Image src={EonBoard} alt="EonBoard" className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"/>
            </div>
        </section>
    )
   
}