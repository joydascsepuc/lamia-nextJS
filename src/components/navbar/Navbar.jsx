"use client"

import Link from "next/link";
import React from "react";

const navLinks = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div className="h-20 flex justify-between items-center">
            <Link href="/" className="font-bold text-lg">Lamia</Link>
            <div className="flex items-center gap-5">
                {
                    navLinks.map((navLink) => {
                        return (
                            <Link href={navLink.url} key={navLink.id}>{navLink.title}</Link>
                        )
                    })
                }
                <button className="px-2 py-[3px] border-none bg-green-500 text-white cursor-pointer rounded" onClick={(e) => { console.log('logout'); }}>Logout</button>
            </div>
        </div>
    )
};

export default Navbar;
