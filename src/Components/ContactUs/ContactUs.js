import React from 'react';
import { FiMail } from "react-icons/fi";
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="py-10 px-5" id="contact">
            <div className="container mx-auto">
                <div
                    data-aos="zoom-out-down"
                    className="flex flex-col items-center text-center space-y-5 mb-16"
                >
                    <h2 className="before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-2xl">
                        Contact Us
                    </h2>
                    <p className="text-base text-gray-600 text-paragraph max-w-[520px]">
                        ...
                    </p>
                </div>
                <div className="flex flex-row justify-between sm:justify-center gap-x-10 gap-y-5 flex-wrap items-start">
                    <div className="flex flex-col lg:flex-row gap-x-3 gap-y-1.5 shadow-lg rounded-md px-3 pb-3">
                        <div className="text-accent rounded-sm text-2xl bounce mt-0.5">
                            <FiMail />
                        </div>
                        <div className='space-y-1'>
                            <h4 className="font-body text-xl">Have a question?</h4>
                            <p className="text-paragraph">I am here to help you.</p>
                            <p className="text-accent font-normal">Email us at binarybrains777@gmail.com</p>
                        </div>
                    </div>
                    <form className="space-y-8 w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50" type="text" placeholder="Your name" />
                            <input className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50" type="email" placeholder="Your email" />
                        </div>
                        <input className="border-2 border-gray-900/30 text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50" type="text" placeholder="Subject" />
                        <textarea
                            className="border-2 border-gray-900/30 resize-none w-full outline-none p-6 rounded-md h-[200px] focus:outline focus:outline-1 focus:outline-accent placeholder:text-gray-900/50"
                            placeholder="Your message"
                        ></textarea>
                        <button className="py-4 px-7 font-medium text-white flex items-center justify-center rounded-md hover:bg-accent-hover transition-all h-[54px] bg-accent">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;