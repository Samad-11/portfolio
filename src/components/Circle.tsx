import { ClassValue } from 'clsx'
import React from 'react'

const Circle = ({ className }: { className?: ClassValue }) => {
    return (
        <div className={`bg-gradient-radial bg-gray-200 
            rounded-full 
            size-64 absolute
            ${className}`}></div>
    )
}

export default Circle