import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-12'>
      <h2 className='md:text-5xl text-3xl text-center font-bold text-blue-950 mb-2'>About Us</h2>
      <div className='flex justify-center items-center pb-20 pt-4 md:px-0 px-4'>
        <Image
          src="/about.png"
          alt="about pic"
          w-full
          width={1000}
          height={1000} />
      </div>
      <p className='text-gray-600 text-start md:px-32 px-4'>At <span className='text-blue-950'><i>FURNIRO, </i></span>we believe that furniture should be an extension of your personality, blending both form and function. Our commitment to excellence begins with sourcing the highest quality materials that not only promise durability but also reflect timeless design. Every piece we create is a result of skilled craftsmanship, where artisans pour their expertise into ensuring each item adds warmth, elegance, and practicality to your home. Whether it's a modern sofa, a handcrafted coffee table, or a custom-built wardrobe, each piece is designed to elevate your space and stand the test of time.
        <br />
        <br />
        Our dedication goes beyond just creating beautiful furniture; we are deeply committed to sustainability and customer satisfaction. We prioritize responsible production practices, ensuring that each item is made with minimal environmental impact. From the moment you explore our collection to the delivery of your furniture, we focus on providing a seamless, enjoyable experience. With <span className='text-blue-950'><i>FURNIRO,</i></span> you can trust that you're not only investing in quality furniture but in a relationship built on care, attention to detail, and a passion for design.
      </p>
    </div>
  )
}

export default About
