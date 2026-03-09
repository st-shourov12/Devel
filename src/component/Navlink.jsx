"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {

    const path = usePathname()
    return (
        <Link className={`${path.startsWith(href) && "text-orange-600" } `} href={href}>
            {children}
            
        </Link>
    );
};

export default Navlink;