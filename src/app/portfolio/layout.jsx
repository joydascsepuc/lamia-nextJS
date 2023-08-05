import React from 'react'

const PortfolioLayout = ({ children }) => {
    return (
        <div>
            <h1 className='font-extrabold text-6xl my-5'>Our Works</h1>
            {children}
        </div>
    )
}

export default PortfolioLayout