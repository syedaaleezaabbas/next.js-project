import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-white py-4 px-5 md:px-20 md:pl-32 shadow-md">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Furniture</h1>
            </div>

            <div className="md:hidden flex space-x-12 sm:justify-between">
                <RxHamburgerMenu className="w-8 h-8 text-blue-950" />
            </div>

            <div>
                <nav className="hidden md:flex space-x-12">
                    <ul className="flex gap-x-16 pr-14">
                        <li><Link href="/" className="text-gray-600 hover:text-teal-600 hover:underline">Home</Link></li>
                        <li><Link href="/services" className="text-gray-600 hover:text-teal-600 hover:underline">Services</Link></li>
                        <li><Link href="/products" className="text-gray-600 hover:text-teal-600 hover:underline">Products</Link></li>
                        <li><Link href="/gallery" className="text-gray-600 hover:text-teal-600 hover:underline">Gallery</Link></li>
                        <li><Link href="/contact" className="text-gray-600 hover:text-teal-600 hover:underline">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}