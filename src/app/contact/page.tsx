import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='py-12'>
            <h2 className='text-3xl md:text-5xl font-bold text-blue-950 text-center mb-4'>Get In Touch With Us</h2>
            <p className='text-center text-gray-600 mb-20 md:max-w-2xl mx-auto px-4'>Have questions or need assistance with our products and services? Our team is here to help! Feel free to reach out, and we'll provide you with the information you need. Your satisfaction is our priority, and we’re eager to assist in any way we can.</p>
            <div className='flex md:flex-row flex-col max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-52'>

                <div className='space-y-8 text-left md:pl-0 pl-6'>
                    <div className='flex items-center space-x-8'>
                        <IoLocationSharp className='h-6 w-6' />
                        <p><strong>Address</strong><br />236 5th SE Avenue, <br />New York NY10000, United<br /> States</p>
                    </div>

                    <div className='flex items-center space-x-8'>
                        <FaPhoneAlt className='h-6 w-6' />
                        <p><strong>Phone</strong><br />Mobile:(+84) 546-6789<br />Hotline:(+84) 123-4567</p>
                    </div>

                    <div className='flex items-center space-x-8'>
                        <FaClock className='h-6 w-6' />
                        <p><strong>Working Time</strong><br />Monday-Friday:9:00-22:00<br />Saturday-Sunday:9:00-21:00</p>
                    </div>
                </div>

                <form className='w-full md:w-96 mx-auto mt-8 space-y-8 mb-2 md:px-0 px-4'>
                    <label className='text-gray-600'>Name
                        <input
                            type="text"
                            name='name'
                            placeholder='Name' className='w-full px-4 py-2 border border-blue-950 rounded-md focus:outline-none mt-2 mb-6' required />
                    </label>
                    <label className='text-gray-600'>Email Address
                        <input
                            type="email"
                            name='email'
                            placeholder='Email Address' className='w-full px-4 py-2 border border-blue-950 rounded-md focus:outline-none mt-2 mb-6' required />
                    </label>
                    <label className='text-gray-600'>Subject
                        <input
                            type="text"
                            name='subject'
                            placeholder='Subject' className='w-full px-4 py-2 border border-blue-950 rounded-md focus:outline-none mt-2 mb-6' required />
                    </label>
                    <label className='text-gray-600'>Message
                        <textarea name="message"
                            placeholder="Message"
                            rows={4}
                            className='w-full px-4 py-2 border border-blue-950 rounded-md focus:outline-none mt-2'>
                        </textarea>
                    </label>
                    <button
                        type='submit'
                        className='w-1/2 bg-blue-950 text-white font-bold py-2 rounded-md mt-4'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact