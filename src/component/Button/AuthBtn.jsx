"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthBtn = () => {
    const session = useSession();
    return (
        <div>

            {
                session.status == 'authenticated' ? (
                    <>
                        <button onClick={()=>signOut()} className='btn bg-orange-500'>Logout</button>
                    </>) : (
                    <><Link href={'/login'}>
                        <button className='btn'>Login</button>

                    </Link></>
                )}


        </div>
    );
};

export default AuthBtn;