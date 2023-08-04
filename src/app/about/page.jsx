"use client"

import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="pb-5">
            <div className="w-full h-96 relative">
                <div>
                    <Image src='https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=600' className="object-cover grayscale" fill={true} alt="about-page" />
                </div>
                <div className="absolute bottom-6 left-5 px-10 py-6 bg-gradient-to-r from-green-500 to-slate-300 bg-clip-text text-transparent">
                    <h1 className="font-extrabold text-5xl pb-5">Digital Storytelling</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium recusandae ex iure, <br /> suscipit non possimus?</p>
                </div>
            </div>
            <div className="flex gap-[100px]">
                <div className="flex-1 mt-12 flex flex-col gap-7">
                    <h1 className="font-extrabold text-3xl">Who we are?</h1>
                    <p className="text-base text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa dolores ad quam officiis provident error eos aut sequi laboriosam.
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt veritatis aliquam suscipit modi ratione, blanditiis eveniet sint quae doloribus voluptatibus? Ducimus minus ipsum distinctio maxime.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus facere unde aliquid iure nam illum eveniet quibusdam, rerum aspernatur! Sit deserunt quas alias dolores impedit temporibus dolor perspiciatis molestias.
                    </p>
                </div>
                <div className="flex-1 mt-12 flex flex-col gap-7">
                    <h1 className="font-extrabold text-3xl">What we do?</h1>
                    <p className="text-base text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, doloribus? Magnam aut dignissimos reprehenderit voluptate quaerat unde, quas voluptas dolor!
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem assumenda repellendus in. Mollitia tempora assumenda qui dicta eaque incidunt perferendis harum enim inventore velit, molestiae omnis fuga nam dolorem.
                        <br />
                        <br /> -- Dynamic Websites
                        <br />
                        <br /> -- Fast & Handy
                        <br />
                        <br /> -- Mobile Apps
                    </p>
                    <Button url='/contact' text='Contact' />
                </div>
            </div>
        </div>
    )
};

export default About;
