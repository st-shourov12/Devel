import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col gap-5'>
            <BiSolidErrorAlt size={100} className="text-orange-600"></BiSolidErrorAlt>
            <h2 className="text-4xl font-bold">Page Not Found</h2>
            <Link className="btn border border-orange-500 hover:bg-orange-600" href={'/'}>Go to Home</Link>
            
        </div>
    );
};

export default Error404;