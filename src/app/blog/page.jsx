import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 10
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

const images = [
    {
        imageURL: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
        imageURL: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
        imageURL: 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
        imageURL: 'https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
    {
        imageURL: 'https://images.pexels.com/photos/693429/pexels-photo-693429.jpeg?auto=compress&cs=tinysrgb&w=900',
    },
];

const Blog = async () => {
    const data = await getData();
    return (
        <div>
            {
                data.map((item) => {
                    const randomImageIndex = Math.floor(Math.random() * images.length);
                    const randomImage = (randomImageIndex, images[randomImageIndex]);
                    return (
                        <Link href={'/blog/' + item.id} key={item.id}>
                            <div className="flex my-10" >
                                <div className="flex-1 h-[200px] w-[200px] relative">
                                    <Image src={randomImage.imageURL} alt="post-images" fill={true} className="object-cover" />
                                </div>
                                <div className="flex-1 px-12 flex flex-col gap-5 justify-center">
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                    <p className="text-md">{item.body}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Blog;
