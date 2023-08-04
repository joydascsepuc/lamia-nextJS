"use client"

import React from "react";
import ContactImage from 'public/contact.png'
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
    return (
        <div className="my-11 px-4">
            <h1 className="text-center text-4xl text-gray-300 font-extrabold mb-16">Let&#39;s Keep in Touch</h1>
            <div className="flex gap-[100px] align-middle">
                <div className="flex-1 h-[500px] relative">
                    <Image src={ContactImage} alt="contact-image" fill={true} className="animate-little-bounce" />
                </div>
                <form action="" className="flex-1 flex flex-col gap-4">
                    <input type="text" placeholder="Name" className="p-3 bg-transparent outline-none border-[1px] border-solid text-white border-gray-400 text-base font-semibold" />
                    <input type="email" placeholder="email" className="p-3 bg-transparent outline-none border-[1px] border-solid text-white border-gray-400 text-base font-semibold" />
                    <textarea cols="30" rows="7" placeholder="Your message" className="p-3 bg-transparent outline-none border-[1px] border-solid text-white border-gray-400 text-base font-semibold"></textarea>
                    <Button url='#' text='Send' />
                </form>
            </div>
        </div>
    )
};

export default Contact;
