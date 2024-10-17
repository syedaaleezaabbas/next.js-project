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
                    <div className="container mx-auto flex justify-center md:justify-end items-center h-full px-4 md:px-36 md:pt-24">
                        <div className="bg-gray-300 p-3 md:p-8 rounded-lg max-w-sm md:max-w-lg shadow-lg text-center md:text-left mx-8 md:mx-0 md:h-[320px]">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-3">New Arrival</h2>
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 md:mt-4">Discover Our New Collection</h1>
                            <p className="md:mt-3 mt-1 mb-2 text-sm md:text-base text-gray-600">Discover a curated collection of furniture designed to bring modern elegance and timeless comfort to your home. Explore pieces that transform spaces and inspire beautiful living.</p>
                            <button className="mt-1 md:mt-6 mb-2 inline-block bg-blue-950 text-white px-6 py-3 w-40 md:w-48 rounded-full">Buy Now</button>
                        </div>
                    </div>
                </section>



                {/* icons section */}
                <section className="bg-gray-200 py-6">
                    <div className="container mx-auto md:flex flex-row justify-between px-4 md:px-14">
                        {/* free delivery */}
                        <div className="flex items-center space-x-4">
                            <TbTruckDelivery className="w-12 h-12 text-blue-950 mb-10 md:mb-5" />
                            <div>
                                <h3 className="font-semibold text-lg">Free Delivery</h3>
                                <p className="text-gray-600">Enjoy complimentary shipping on all orders.</p>
                            </div>
                        </div>

                        {/* 24/7 support */}
                        <div className="flex items-center space-x-4">
                            <Ri24HoursLine className="w-12 h-12 text-blue-950 mb-10 md:mb-5" />
                            <div>

                                <h3 className="font-semibold text-lg">24/7 Support</h3>
                                <p className="text-gray-600">Our team is here to assist you anytime.</p>
                            </div>
                        </div>

                        {/* 100% authentic */}
                        <div className="flex items-center space-x-4">
                            <MdOutlineVerifiedUser className="w-12 h-12 text-blue-950 mb-10 md:mb-5" />

                            <div>
                                <h3 className="font-semibold text-lg">100% Authentic</h3>
                                <p className="text-gray-600">Guaranteed quality with every puschase.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* inspiration collection */}
                <section className="py-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Inspiration Collection</h2>
                    <p className="mt-4 text-gray-600 px-4">Step into a world of inspiration where design meets comfort. Our carefully selected pieces create the perfect balance between style and functionality, turning your home into a haven of relaxation.</p>
                    <div className="md:flex justify-center mt-8 gap-8">
                        <Image src="/pic1.png" alt="inspiration collection" width={1050} height={1050} className="object-cover" />
                    </div>
                </section>



                {/* beautify your space */}
                <section className="bg-gray-200 flex gap-2 md:flex-row flex-col items-center mt-0 w-full md:pl-44 pl:0 relative">
                    {/* left side */}
                    <div className="flex-1 text-center md:text-left md:flex md:flex-col md:justify-center">
                        <h2 className="font-bold text-3xl text-gray-900 md:mt-0 mt-12">Beautify Your space</h2>
                        <p className="text-lg text-gray-600 md:mt-2 mt-4 md:px-0 px-2">Elevate your living space with timeless pieces crafted to inspire comfort and sophistication. Whether you are redesigning a cozy nook or transforming your entire home, our collection seamlessly blends beauty and functionality.</p>
                        <button className="mt-8 inline-block bg-blue-950 text-white px-6 py-3 w-48 rounded-full">Learn more</button>
                    </div>
                    {/* right side */}
                    <div className="flex-1 flex justify-center items-center my-10 relative">
                        {/* back image */}
                        <Image src="/beautifypic.png" alt="background beauty" width={300} height={300} className="absolute md:ml-24 ml-14 md:pl-24 pl-10 object-cover" />
                        {/* front image */}
                        <Image src="/pic2.png" alt="beauty your space" width={300} height={300} className="relative z-10 object-cover" />
                    </div>
                </section>



                {/* product range */}
                <section className="py-8 mb-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Browse The Range</h2>
                        <p className="mt-3 px-4 text-gray-600">Explore our diverse range of furniture tailored for every room in your home. From dining to living spaces, each piece is designed with style and durability in mind.</p>
                        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 mt-6">
                            {/* product1 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs md:mb-0 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/productpic2.png" alt="Dining" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Dining</h3>
                            </div>
                            {/* product2 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs md:mb-0 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/productpic1.png" alt="Living" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Living</h3>
                            </div>
                            {/* product3 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs md:mb-0 mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/productpic3.png" alt="Bedroom" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Bedroom</h3>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="bg-gray-50">
                    <hr className="my-6 mb-5 mt-0 border-gray-300" />
                </div>



                {/* work */}
                <section className="py-8 mb-2 mt-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                        <p className="mt-3 text-gray-600 px-4">From secure purchases to fast shipping, we make your shopping experience seamless. Explore how easy it is to bring beautiful designs in your home.</p>
                        <div className="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mt-6">
                            {/* work1 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/workpic1.png" alt="Purchase securely" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Purchase Securely</h3>
                                <p className="mt-2 text-gray-600">Shop with confidence knowing your transactions are safe and protected every step of the way.</p>
                            </div>
                            {/* work2 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/workpic2.png" alt="Ships From Warehouse" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Ships From Warehouse</h3>
                                <p className="mt-2 text-gray-600">Enjoy swift and reliable delivery, with products dispatched directly from our warehouse to your doorstep.</p>
                            </div>
                            {/* work3 */}
                            <div className="p-4 bg-white rounded-lg max-w-xs flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                <Image src="/workpic3.png" alt="Style your room" width={250} height={250} className="md:w-[350px] md:h-[350px]" />
                                <h3 className="mt-4 text-xl font-semibold">Style Your Room</h3>
                                <p className="mt-2 text-gray-600">Elevate your space effortlessly with carefully curated pieces designed to bring your vision to lfe.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join our mailing list section */}
                <section className="bg-gray-200 py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Join Our Mailing List</h3>
                        <p className="text-gray-600 mt-3">Sign up to recieve the latest inspiration, product updates, and exclusive offers from our team. Be the first to discover new arrivals and special promotions.</p>
                        <div className="mt-8 flex justify-center">
                            <input type="email" placeholder="example@gmail.com" className="md:px-4 px-1  md:w-80 w-40 rounded-l-lg border border-blue-950 focus:outline-none" />
                            <button className="bg-blue-950 text-white py-3 px-14 rounded-r-lg">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}