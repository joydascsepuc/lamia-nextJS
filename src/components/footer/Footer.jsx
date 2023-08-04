import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 flex items-center justify-between">
            <div>&copy;Lamia, All rights reserved.</div>
            <div className="flex items-center gap-4">
                <Image src="/1.png" className="opacity-60 cursor-pointer" width={15} height={15} alt="facebook" />
                <Image src="/2.png" className="opacity-60 cursor-pointer" width={15} height={15} alt="instagram" />
                <Image src="/3.png" className="opacity-60 cursor-pointer" width={15} height={15} alt="twitter" />
                <Image src="/4.png" className="opacity-60 cursor-pointer" width={15} height={15} alt="youtube" />
            </div>
        </div>
    )
};

export default Footer;
