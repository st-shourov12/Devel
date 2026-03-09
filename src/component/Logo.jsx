import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center text-xl gap-1 font-bold'>
            <div className="py-1 px-2 bg-orange-600 rounded-sm">D</div>
            Dev<span className="text-orange-600">EL</span>
            
        </Link>
    );
};

export default Logo;