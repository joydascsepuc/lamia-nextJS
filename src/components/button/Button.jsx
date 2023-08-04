import Link from 'next/link'
import React from 'react'

const Button = ({ url, text }) => {
    return (
        <Link href={url}>
            <button className='px-5 py-2 cursor-pointer bg-green-500 border-none rounded text-white font-semibold max-w-max'>{text}</button>
        </Link>
    )
}

export default Button