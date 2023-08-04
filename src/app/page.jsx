"use client"

import Image from "next/image";
import Hero from "public/hero.png"

export default function Home() {
    return (
        <div className="flex items-center gap-24">
            <div className="flex-1 flex flex-col gap-12">
                <h1 className="text-6xl font-extrabold bg-gradient-to-b from-green-500 to-gray-300  bg-clip-text text-transparent">This is design for Lamia</h1>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis cumque animi. Placeat ut fugiat.</p>

                <button className="px-5 py-2 cursor-pointer bg-green-500 border-none rounded text-white font-semibold max-w-max">See our blog</button>
            </div>
            <div className="flex-1 flex flex-col gap-12">
                <Image src={Hero} alt="Home-image" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
}
