// // app/components/LatestCourse.jsx  ← Server Component (no "use client")

// import Image from "next/image";
// import courses from '@/data/course.json';
// import Link from "next/link";
// import CourseCard from "@/component/Home/CourseCard";


// const Course = () => {
//     return (
//         <section className="py-16 px-4 bg-base-200">
//             <div className="max-w-11/12 mx-auto">

//                 {/* Header */}
//                 <div className="text-center mb-10">
                    
//                     <h2 className="text-4xl font-bold">All Courses</h2>
//                     <p className="text-base-content/50 mt-3 max-w-md mx-auto">
//                         Start learning today with our most popular and up-to-date courses.
//                     </p>
//                 </div>

//                 {/* Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {courses.map((course) => (
//                         <CourseCard key={course.id} course={course} />
//                     ))}
//                 </div>

//                 {/* View All Button */}
//                 <div className="text-center mt-10">
//                     <Link href="/" className="btn hover:bg-orange-600 border border-orange-600 btn-wide">
//                         Home
//                     </Link>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Course;

// app/course/page.jsx
"use client";

import courses from '@/data/course.json';
import Link from "next/link";
import CourseCard from "@/component/Home/CourseCard";
import { useState } from "react";

const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "Tools"];

const Course = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = courses.filter((c) => {
        const matchSearch =
            c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.instructor.toLowerCase().includes(search.toLowerCase()) ||
            c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        const matchCategory = category === "All" || c.category === category;
        return matchSearch && matchCategory;
    });

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

                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">

                    {/* Search Bar */}
                    <label className="input input-bordered flex items-center gap-2 flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search courses, instructors, tags..."
                            className="grow"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {/* Clear button */}
                        {search && (
                            <button onClick={() => setSearch("")} className="opacity-50 hover:opacity-100">
                                ✕
                            </button>
                        )}
                    </label>

                    {/* Category Filter */}
                    <select
                        className="select select-bordered w-full sm:w-48"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-base-content/50">
                        Showing <span className="font-semibold text-primary">{filtered.length}</span> {filtered.length === 1 ? "course" : "courses"}
                        {category !== "All" && <span> in <span className="font-semibold">{category}</span></span>}
                    </p>

                    {/* Clear filters */}
                    {(search || category !== "All") && (
                        <button
                            onClick={() => { setSearch(""); setCategory("All"); }}
                            className="text-sm text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-20">
                        <p className="text-5xl mb-4">🔭</p>
                        <h3 className="text-xl font-bold mb-2">No courses found</h3>
                        <p className="text-base-content/50 text-sm mb-6">
                            Try a different search term or category.
                        </p>
                        <button
                            onClick={() => { setSearch(""); setCategory("All"); }}
                            className="btn btn-primary btn-sm"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Back to Home */}
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