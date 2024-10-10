import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-8">
            <div className="container mx-auto px-12 pb-6 flex">
                {/* left section */}
                <div className="w-1/3 pr-4">
                    <h3 className="text-2xl font-bold mt-3">Beauty Care</h3>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eaque fugiat, velit unde, rerum tenetur molestias, quod error nesciunt ad autem minus.</p>
                    <h3 className="text-2xl font-bold mt-4">Follow Us</h3>
                </div>
                {/* right section */}
                <div className="flex-1 w-1/3">
                    <h3 className="text-2xl font-bold mt-6">Instagram Shop</h3>
                    <div className="flex justify-center items-center space-x-4 mt-2">
                        <div className="space-x-2 mt-2">
                            <Image src="/footerpic1.jpg" alt="instagram1" width={550} height={550} />
                        </div>
                        <div className="space-x-2 mt-2">
                            <Image src="/footerpic2.jpg" alt="instagram2" width={550} height={550} />
                        </div>
                        <div className="space-x-2 mt-2">
                            <Image src="/footerpic3.jpg" alt="instagram3" width={550} height={150} />
                        </div>
                        <div className="space-x-2 mt-2">
                            <Image src="/footerpic4.jpg" alt="instagram4" width={550} height={550} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}