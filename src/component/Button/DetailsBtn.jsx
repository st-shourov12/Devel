"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

const DetailsBtn = ({ course }) => {
    const session = useSession();
    return (
    <>
    {
        session.status == 'authenticated' ?

        <Link href={`/course/${course?.id}`} className="btn bg-orange-600 btn-sm">
            

            
            Details
        </Link> :
        <Link href={`/login`} className="btn bg-orange-600 btn-sm">
            

            
            Details
        </Link> 
    }
    
    
    </>
    );
};

export default DetailsBtn;