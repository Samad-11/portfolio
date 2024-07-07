import { ClassValue } from 'clsx'
import Link from 'next/link'
import React from 'react'

const Navigation = ({ className, linkList }: { className?: ClassValue, linkList?: { name: string, href: string }[] }) => {
    return (
        <div className={`flex ${className}`}>
            <div className="h-72 w-[2px] bg-white">
            </div>
            <div className="h-72 flex flex-col items-start justify-around -ml-10">
                {
                    linkList &&
                    <Links linkList={linkList} />
                }
            </div>
        </div>
    )
}

const Links = ({ linkList }: { linkList: { name: string, href: string }[] }) => {
    return (
        <>
            {
                linkList.map((link, indx) => (
                    <Link href={link.href} key={indx} className="flex  items-center group">
                        <div className="h-[2px] w-40 bg-white">
                        </div>
                        <div className="bg-white size-4 rounded-full mr-2
                        group-hover:mr-9
                        group-focus:mr-9
                        group-hover:bg-[#614242]
                        group-focus:bg-[#614242]
                        transition-all
                        " />
                        <div>
                            <p className="font-medium text-xl text-white">{link.name}</p>
                        </div>
                    </Link>

                ))
            }
        </>
    )
}

export default Navigation