import React from 'react';
import { FiMail } from "react-icons/fi";
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="py-12 lg:py-32 bg-primary" id="contact">
            <div className="container mx-auto">
                <div
                    data-aos="zoom-out-down"
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="py-12 lg:py-32-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
                        Contact me
                    </h2>
                    <p className="text-base text-paragraph mb-16 lg:mb-24 max-w-[520px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
                        labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row sm:px-10 px-5">
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    <div className="flex flex-col lg:flex-row gap-x-4">
                        <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                <FiMail />
                            </div>
                            <div>
                                <h4 className="font-body text-xl mb-1">Have a question?</h4>
                                <p className="mb-1 text-paragraph">I am here to help you.</p>
                                <p className="text-accent font-normal ">Email us at binarybrains777@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-8 w-full max-w-[780px]">
                        <div className="flex gap-8">
                            <input className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent" type="text" placeholder="Your name" />
                            <input className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent" type="email" placeholder="Your email" />
                        </div>
                        <input className="bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent" type="text" placeholder="Subject" />
                        <textarea
                            className="bg-secondary resize-none w-full outline-none p-6 rounded-sm h-[200px] focus:outline focus:outline-1 focus:outline-accent"
                            placeholder="Your message"
                        ></textarea>
                        <button className="py-4 px-7 font-medium text-white flex items-center justify-center rounded-sm hover:bg-accent-hover transition-all h-[54px] bg-accent hover:bg-secondary-hover">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;