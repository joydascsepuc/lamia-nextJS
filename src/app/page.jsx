"use client"

import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "public/hero.png"

export default function Home() {
    return (
        <div className="flex items-center gap-24">
            <div className="flex-1 flex flex-col gap-12">
                <h1 className="text-6xl font-extrabold bg-gradient-to-b from-green-500 to-gray-300  bg-clip-text text-transparent">This is design for Lamia</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis cumque animi. Placeat ut fugiat.</p>

                <Button url='/portfolio' text='See our blog' />
            </div>
            <div className="flex-1 flex flex-col gap-12">
                <Image src={Hero} alt="Home-image" className="w-full h-auto object-cover animate-little-bounce" />
            </div>
        </div>
    );
}
