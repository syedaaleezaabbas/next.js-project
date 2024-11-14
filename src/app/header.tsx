import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-white py-4 px-5 md:px-20 md:pl-32 shadow-md">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Furniro</h1>
            </div>

            <nav className="hidden md:block">
                <ul className="flex gap-x-36 pr-40">
                    <li><Link href="/" className="text-gray-600 hover:text-teal-600 hover:underline">Home</Link></li>
                    <li><Link href="/about" className="text-gray-600 hover:text-teal-600 hover:underline">About</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-teal-600 hover:underline">Contact</Link></li>
                </ul>
            </nav>

            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-2xl text-blue-950" />
                </SheetTrigger>
                <SheetContent className="bg-gray-300">
                    <nav>
                        <ul className="flex flex-col text-xl text-center pt-20 space-y-8">
                            <li><Link href="/" className="text-gray-600 hover:text-teal-600 hover:underline">Home</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-teal-600 hover:underline">About</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-teal-600 hover:underline">Contact</Link></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}