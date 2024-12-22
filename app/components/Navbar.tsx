import Link from "next/link";
import Image from "next/image";
import Eonboard from '@/public/assets/EonBoard.png'
import { AuthModal } from "./AuthModal";
import { ThemeToggle } from "./ThemeToggle";


export function Navbar() {
    return (
        <div className="flex justify-between items-center py-5">
        <Link href="/" className="flex items-center gap-2">
        <Image src={Eonboard} alt="Eonboard" className="size-12"/>
        <h4 className="text-3xl font-semibold">
            Eon<span className="text-primary">Board</span>
        </h4>
        </Link>

        <div className="hidden md:flex md:justify-end md:space-x-4">
            <ThemeToggle/>
            <AuthModal/>    
        </div>
        </div>
    )
}