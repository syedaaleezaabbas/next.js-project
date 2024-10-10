import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";

export default function Home() {
    return (
        <main>
            <div>
                {/* hero section */}
                <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[500px] md:h-[700px] py-16 md:py-32">
                    <div className="container mx-auto flex justify-center md:justify-end items-center h-full px-4 md:px-0">
                        <div className="bg-gray-300 p-3 md:p-8 rounded-lg max-w-xs md:max-w-lg shadow-lg text-center md:text-left mx-8 md:mx-0">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-3">New Arrival</h2>
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-1">Discover Our New Collection</h1>
                            <p className="md:mt-4 mt-1 mb-2 text-sm md:text-base text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint porro temporibus animi incidunt voluptatem distinctio laborum voluptatibus adipisci?</p>
                            <button className="mt-1 md:mt-8 mb-2 inline-block bg-blue-950 text-white px-6 py-3 w-40 md:w-48 rounded-full">Buy Now</button>
                        </div>
                    </div>
                </section>

                {/* icons section */}
                <section className="bg-gray-200 py-6">
                    <div className="container mx-auto flex justify-between px-14">
                        {/* free delivery */}
                        <div className="flex items-center space-x-4">
                            <TbTruckDelivery className="w-12 h-12 text-blue-950 mb-5" />
                            <div>
                                <h3 className="font-semibold text-lg">Free Delivery</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        {/* 24/7 support */}
                        <div className="flex items-center space-x-4">
                            <Ri24HoursLine className="w-12 h-12 text-blue-950 mb-5" />
                            <div>

                                <h3 className="font-semibold text-lg">24/7 Support</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        {/* 100% authentic */}
                        <div className="flex items-center space-x-4">
                            <MdOutlineVerifiedUser className="w-12 h-12 text-blue-950 mb-5" />

                            <div>
                                <h3 className="font-semibold text-lg">100% Authentic</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* inspiration collection */}
                <div>
                    <section className="py-12 text-center bg-gray-50">
                        <h2 className="text-3xl font-bold text-gray-900">Inspiration Collection</h2>
                        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt rem non eaque delectus, pariatur iusto nemo.</p>
                        <div className="flex justify-center mt-8 gap-8">
                            <Image src="/pic1.png" alt="inspiration collection" width={950} height={950} className="object-cover" />
                        </div>
                    </section>
                </div>

                {/* beautify your space */}
                <section className="bg-gray-200 flex gap-2 sm:flex-col md:flex-row items-center mt-0 w-full pl-44">
                    {/* left side */}
                    <div className="flex-1 text-center md:text-left md:flex md:flex-col md:justify-center">
                        <h2 className="font-bold text-3xl text-gray-900">Beautify Your space</h2>
                        <p className="text-lg text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsam tempore impedit voluptate, aut in temporibus, reprehenderit est fuga magnam consectetur perferendis consequuntur voluptatum saepe velit corporis, officiis aperiam modi?</p>
                        <button className="mt-8 inline-block bg-blue-950 text-white px-6 py-3 w-48 rounded-full">Learn more</button>
                    </div>
                    {/* right side */}
                    <div className="flex-1 flex justify-center my-10">
                        <Image src="/pic2.png" alt="beauty your space" width={400} height={400} />
                    </div>
                </section>

                {/* product range */}
                <section className="py-8 mb-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Browse The Range</h2>
                        <p className="mt-3 text-gray-600">Lorem ipsum dolor, sit amet adipisicing elit. Voluptates debitis sapiente? Distinctio illum sint? Recusandae, soluta. Doloribus voluptate sed?</p>
                        <div className="flex justify-center space-x-12 mt-6">
                            {/* product1 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/productpic2.png" alt="Dining" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Dining</h3>
                            </div>
                            {/* product2 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/productpic1.png" alt="Living" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Living</h3>
                            </div>
                            {/* product3 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/productpic3.png" alt="Bedroom" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Bedroom</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* work */}
                <hr className="my-6 border-gray-300" />
                <section className="py-8 mb-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                        <p className="mt-3 text-gray-600">Lorem ipsum dolor consectetur elit. Corporis sint nam, voluptatibus explicabo, minima magnam, perferendis ducimus. Illum consequatur!</p>
                        <div className="flex justify-center space-x-12 mt-6">
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/workpic1.png" alt="Purchase securely" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Purchase Securely</h3>
                                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/workpic2.png" alt="Ships From Warehouse" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Ships From Warehouse</h3>
                                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg max-w-xs">
                                <Image src="/workpic3.png" alt="Style your room" width={350} height={350} />
                                <h3 className="mt-4 text-xl font-semibold">Style Your Room</h3>
                                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join our mailing list section */}
                <section className="bg-gray-200 py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Join Our Mailing List</h3>
                        <p className="text-gray-600 mt-3">Sign up to recieve inspiration, product updates, and special offers from our team.</p>
                        <div className="mt-8 flex justify-center">
                            <input type="email" placeholder="example@gmail.com" className="px-4 w-80 rounded-l-lg border border-blue-950 focus:outline-none" />
                            <button className="bg-blue-950 text-white py-3 px-14 rounded-r-lg">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}