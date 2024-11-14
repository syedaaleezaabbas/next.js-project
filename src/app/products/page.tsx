import React from 'react'
import Image from 'next/image'

const products = () => {
    return (
        <div className="py-12">
            <h2 className="md:text-5xl text-3xl font-bold text-blue-950 text-center mb-8">Our Products</h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-12 items-center">

                {/* Product Card 1 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/image 1.png" alt="Syltherine" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-red-500 flex items-center justify-center text-white text-xs rounded-full">-30%</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Syltherine</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <div className='flex items-center'>
                            <p className="font-bold text-gray-800">Rp 2.500.000</p>
                            <p className="text-gray-500 text-xs line-through ml-2">Rp 3.500.000</p>
                        </div>
                    </div>
                </div>

                {/* Product Card 2 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 2.png" alt="Leviosa" layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Leviosa</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <p className="font-bold text-gray-800">Rp 2.500.000</p>
                    </div>
                </div>
                {/* product 3 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 3.png" alt="lolito" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-red-500 flex items-center justify-center text-white text-xs rounded-full">-50%</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Lolito</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <div className='flex items-center'>
                            <p className="font-bold text-gray-800">Rp 2.500.000</p>
                            <p className="text-gray-500 text-xs line-through ml-2">Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                {/* product 4 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 4.png" alt="respira" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-green-500 flex items-center justify-center text-white text-xs rounded-full">New</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Respira</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <p className="font-bold text-gray-800">Rp 2.500.000</p>
                    </div>
                </div>
                {/* product 5 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 5.png" alt="grifo" layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Grifo</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <p className="font-bold text-gray-800">Rp 2.500.000</p>
                    </div>
                </div>
                {/* product 6 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 6.png" alt="muggo" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-green-500 flex items-center justify-center text-white text-xs rounded-full">New</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Muggo</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <p className="font-bold text-gray-800">Rp 2.500.000</p>
                    </div>
                </div>
                {/* product 7 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image-7.png" alt="Pingky" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-red-500 flex items-center justify-center text-white text-xs rounded-full">-50%</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Pingky</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <div className='flex items-center'>
                            <p className="font-bold text-gray-800">Rp 2.500.000</p>
                            <p className="text-gray-500 text-xs line-through ml-2">Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                {/* product 8 */}
                <div className="relative bg-gray-300 shadow-md overflow-hidden w-full">
                    <div className="relative h-72">
                        <Image src="/Image 8.png" alt="Leviosa" layout="fill" objectFit="cover" />
                        <span className="absolute top-2 right-2 w-10 h-10 bg-green-500 flex items-center justify-center text-white text-xs rounded-full">New</span>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg">Leviosa</h3>
                        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor.</p>
                        <p className="font-bold text-gray-800">Rp 2.500.000</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="px-12 py-2 border border-blue-950 hover:bg-blue-900  text-blue-950 font-semibold">Show More</button>
            </div>
        </div>

    )
}

export default products
