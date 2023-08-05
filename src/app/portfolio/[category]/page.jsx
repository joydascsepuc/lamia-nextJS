"use client"

import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const loopData = [
    {
        id: 1,
        title: 'Creative Portfolio',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis asperiores tenetur optio nostrum nihil facilis fuga quos reiciendis? Saepe.',
        imageURL: 'https://images.pexels.com/photos/4916261/pexels-photo-4916261.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        title: 'Creative Portfolio',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis asperiores tenetur optio nostrum nihil facilis fuga quos reiciendis? Saepe.',
        imageURL: 'https://images.pexels.com/photos/5273061/pexels-photo-5273061.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 3,
        title: 'Creative Portfolio',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis asperiores tenetur optio nostrum nihil facilis fuga quos reiciendis? Saepe.',
        imageURL: 'https://images.pexels.com/photos/2171138/pexels-photo-2171138.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        title: 'Creative Portfolio',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis asperiores tenetur optio nostrum nihil facilis fuga quos reiciendis? Saepe.',
        imageURL: 'https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];

const Category = ({ params }) => {
    return (
        <div className="my-11">
            <h1 className="text-4xl font-bold mb-3 text-green-400 capitalize">{params.category}</h1>
            {
                loopData.map((item) => {
                    let mainDiv = 'flex mt-11';
                    let secondDiv = 'flex-1 flex flex-col gap-5 justify-center';
                    if (item.id % 2 == 0) {
                        mainDiv += ' flex-row-reverse';
                        secondDiv += ' px-10';
                    }
                    return (
                        <div className={mainDiv} key={item.id}>
                            <div className={secondDiv}>
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p>
                                    {item.desc}
                                </p>
                                <Button url={'#'} text={'See More'} />
                            </div>
                            <div className="flex-1 h-[350px] relative">
                                <Image src={item.imageURL} alt={'artwork'} fill={true} className="object-cover" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Category;
