import Image from "next/image";
import React from "react";

const BlogPost = () => {
    return (
        <div className="my-11">
            <div className="flex flex-row-reverse gap-5 justify-center">
                <div className="flex-1">
                    <div className="h-[300px] w-full relative">
                        <Image src={'https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=900'} fill={true} alt="blog-image" className="object-cover" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores?</h1>
                    <p className="text-md">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus possimus officiis accusantium impedit tempore tempora aperiam dolorum quaerat ad perferendis totam velit magnam quidem minima, eum esse adipisci blanditiis illo iure itaque. Nihil aliquam odio, animi ad a reiciendis, omnis dolore neque tempore quae eligendi, alias corrupti veniam suscipit
                    </p>
                    <div className="flex mt-5 gap-2">
                        <div className="">
                            <div className="w-[30px] h-[30px] relative">
                                <Image src={'https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=300'} className="rounded-full" fill={true} alt="user-icon" />
                            </div>
                        </div>
                        <div className="">
                            <h5 className="text-md font-bold">Tasnim Kafa</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <p className="text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus numquam eum, officiis aliquam aperiam totam provident at soluta facilis asperiores labore nesciunt tempore est laboriosam? Minima dignissimos quisquam animi deserunt omnis repudiandae aperiam vel iste dolorem. Quia, suscipit ut.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum incidunt unde. Voluptatem optio eius mollitia reiciendis non voluptatibus deleniti magni rem, ratione iure, modi asperiores numquam hic ipsa? Et, magni repellat vitae reprehenderit saepe asperiores temporibus aliquid laudantium sequi, tenetur earum tempora facere quia dolor excepturi aperiam eos deserunt quam odit cum eaque optio quo! Ipsam sint perspiciatis eveniet.
                    <br /><br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime autem vitae aliquid ut sed quo atque voluptatibus nisi veniam.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit, sint veritatis saepe blanditiis dolores non, repellat odit culpa qui eum, magni provident amet quo pariatur tempora aut! Omnis aliquid quisquam, dolor sed dignissimos quaerat. Veritatis eveniet cupiditate quibusdam porro odit nostrum, magnam facilis fuga quia. Vitae odio voluptatum temporibus, itaque debitis rerum repellendus placeat dolorem quis fugit ut possimus corporis corrupti mollitia ab reiciendis? Dolore reprehenderit voluptates excepturi. Nesciunt maxime ea hic nostrum explicabo harum unde. Molestias nam voluptas vero ex ea esse assumenda mollitia nisi, consequatur aspernatur perspiciatis minima reiciendis consectetur! Accusantium labore asperiores non, voluptate quo nesciunt?
                </p>
            </div>
        </div>
    )
};

export default BlogPost;
