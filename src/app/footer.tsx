import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-8">
            <div className="container mx-auto md:px-12 px-6 pb-6 md:flex flex-row">
                {/* left section */}
                <div className="md:w-1/3 w-full pr-4">
                    <h3 className="text-2xl font-bold mt-3">Beauty Care</h3>
                    <p className="mt-8">At Beauty Care, we believe in the power of simplicty and elegance. Our curated colection of furniture is crafted to elevate your home, offering timeless designs that blend seamlessly with modern aesthetics. Explore our selection and experience the beauty and comfort we bring to every space.</p>
                    <h3 className="text-2xl font-bold mt-4">Follow Us</h3>
                </div>
                {/* right section */}
                <div className="flex-1 md:w-1/3 w-full">
                    <h3 className="text-2xl font-bold md:mt-6 mt-10">Instagram Shop</h3>
                    <div className="flex justify-center items-center space-x-4 mt-2">
                        <div className="space-x-2 mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <Image src="/footerpic1.jpg" alt="instagram1" width={550} height={550} />
                        </div>
                        <div className="space-x-2 mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <Image src="/footerpic2.jpg" alt="instagram2" width={550} height={550} />
                        </div>
                        <div className="space-x-2 mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <Image src="/footerpic3.jpg" alt="instagram3" width={550} height={150} />
                        </div>
                        <div className="space-x-2 mt-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <Image src="/footerpic4.jpg" alt="instagram4" width={550} height={550} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}