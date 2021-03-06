import Link from 'next/link';
import React from 'react';

interface BREADCRUMB {
    title: string;
    crumbmenus: {}[];
    bg_url: string;
}

export default function Breadcrumbs({ crumbmenus, title, bg_url }:BREADCRUMB): JSX.Element {
    return <div className="w-full bg-gray-800 dark:bg-gray-900 h-full md:h-68 mx-auto bg-center bg-auto" style={{ backgroundImage: `url(${bg_url})` }}>
    <div className="w-full h-full bg-black/70">
        <div className="justify-center items-center py-12">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold to-yellow-300 uppercase text-center pt-8 drop-shadow-lg">
                {title}
            </h1>
            <div className="flex justify-center text-xs items-center py-4 text-center text-gold gap-4 italic">
                {crumbmenus.map((menu: any, index: number) => (
                    <div key={index}>
                        <Link key={index} href={menu?.link}>{menu.name}</Link>
                        <span className="pl-0">_</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>;
}
