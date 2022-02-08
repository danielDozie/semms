import Link from 'next/link';
import React from 'react';

export default function Breadcrumbs({crumbmenus, title}: any) {
    return <>
        <div className="bg-gray-800 dark:bg-gray-900 h-36 mx-auto py-4">
            <div className="justify-center items-center py-4">
                <h1 className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold to-yellow-300 uppercase text-center pt-2">
                    {title}
                </h1>
                <div className="flex justify-center text-xs items-center py-4 text-center text-gold gap-4 italic">
                    {crumbmenus.map((menu: any, index:number) => (
                        <div key={index}>
                            <Link key={index} href={menu.link}>{menu.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>;
}
