import Image from "next/image";
import Link from "next/link";
import DetailsBtn from "../Button/DetailsBtn";

const CourseCard = ({ course }) => {
    const discount = Math.round(((course.original_price - course.price) / course.original_price) * 100);

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Image */}
            <figure className="relative">
                

                <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={176}
                    className="w-full h-44 object-cover"
                />
                {course.bestseller && (
                    <span className="badge badge-warning absolute top-3 left-3">
                        Bestseller
                    </span>
                )}
                <span className="badge badge-error absolute top-3 right-3">
                    -{discount}%
                </span>
            </figure>

            <div className="card-body p-4 gap-2">

                {/* Category + Level */}
                <div className="flex gap-2">
                    <span className="badge bg-orange-600 badge-sm">{course?.category}</span>
                    <span className="badge badge-ghost badge-sm">{course?.level}</span>
                </div>

                {/* Title */}
                <h3 className="card-title text-base leading-snug line-clamp-2">
                    {course?.title}
                </h3>

                {/* Description */}
                <p className="text-base-content/55 text-sm line-clamp-2">
                    {course?.short_description}
                </p>

                {/* Instructor */}
                <p className="text-sm text-base-content/50">
                    By <span className="font-medium text-base-content/80">{course?.instructor}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="rating rating-sm">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <input
                                key={s}
                                type="radio"
                                className="mask mask-star-2 bg-warning"
                                defaultChecked={Math.round(course?.rating) === s}
                                readOnly
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold">{course?.rating}</span>
                    <span className="text-xs text-base-content/40">({course?.reviews.toLocaleString()})</span>
                </div>

                <div className="divider my-0" />

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold">${course?.price}</span>
                        <span className="text-sm text-base-content/40 line-through ml-2">
                            ${course?.original_price}
                        </span>
                    </div>
                    <DetailsBtn course={course}></DetailsBtn>
                </div>

            </div>
        </div>
    );
};

export default CourseCard
