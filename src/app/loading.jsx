import React from 'react';
import { CgSearchLoading } from "react-icons/cg";

const loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col'>
            <CgSearchLoading size={100} className="text-orange-600 animate-ping"></CgSearchLoading>
            <h2 className="text-2xl font-bold animate-ping">Loading...</h2>
            
            
        </div>
    );
};

export default loading;