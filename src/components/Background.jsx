import React from 'react'

export default function Background() {
    return (
        <div className='bg-hover'>
            {[...Array(900).keys()].map((i) => (
                    <span key={i}></span>
                ))}
        </div>
    )
}
