// app/components/LatestCourse.jsx  ← Server Component (no "use client")

import Image from "next/image";
import courses from '@/data/course.json';
import Link from "next/link";
import CourseCard from "@/component/Home/CourseCard";


const Course = () => {
    return (
        <section className="py-16 px-4 bg-base-200">
            <div className="max-w-11/12 mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    
                    <h2 className="text-4xl font-bold">All Courses</h2>
                    <p className="text-base-content/50 mt-3 max-w-md mx-auto">
                        Start learning today with our most popular and up-to-date courses.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Link href="/" className="btn hover:bg-orange-600 border border-orange-600 btn-wide">
                        Home
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Course;