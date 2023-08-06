import Image from "next/image";
import React from "react";

async function getData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        next: {
            revalidate: 10
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

async function getUserData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
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

const BlogPost = async ({ params }) => {

    const data = await getData(params.id);
    const userData = await getUserData(data.userId);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImage = (randomImageIndex, images[randomImageIndex]);

    return (
        <div className="my-11">
            <div className="flex flex-row-reverse gap-5 justify-center">
                <div className="flex-1">
                    <div className="h-[300px] w-full relative">
                        <Image src={randomImage.imageURL} fill={true} alt="blog-image" className="object-cover" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p className="text-md">
                        {data.body}
                    </p>
                    <div className="flex mt-5 gap-2">
                        <div className="">
                            <div className="w-[30px] h-[30px] relative">
                                <Image src={randomImage.imageURL} className="rounded-full" fill={true} alt="user-icon" />
                            </div>
                        </div>
                        <div className="">
                            <h5 className="text-md font-bold">{userData.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <p className="text-md">
                    {data.body}
                    <br /><br />
                    {data.body}
                    <br /><br /><br />
                    {data.body}
                    <br /><br />
                    {data.body}
                </p>
            </div>
        </div>
    )
};

export default BlogPost;
