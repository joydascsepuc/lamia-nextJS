import Link from "next/link";
import React from "react";

const portfolioLinks = [
    {
        id: 1,
        url: '/portfolio/illustrations',
        title: 'Illustrations',
        imageName: '/illustration.png'
    },
    {
        id: 2,
        url: '/portfolio/websites',
        title: 'Websites',
        imageName: '/websites.jpg'
    },
    {
        id: 3,
        url: '/portfolio/applications',
        title: 'Applications',
        imageName: '/apps.jpg'
    },
];

const Portfolio = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Choose a Gallery</h1>
            <div className="flex gap-[30px]">
                {
                    portfolioLinks.map((link) => {
                        return (
                            <Link key={link.id} href={link.url} className="border-[3px] border-solid border-gray-200 w-[300px] h-[400px] relative bg-cover hover:text-green-500" style={{ backgroundImage: `url(${link.imageName})` }}>
                                <span className="absolute right-3 bottom-3 text-4xl font-bold">{link.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
};

export default Portfolio;
