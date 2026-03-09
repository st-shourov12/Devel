// app/components/LatestCourse.jsx  ← Server Component (no "use client")

import Link from "next/link";
import CourseCard from "./CourseCard";



const courses = [
    {
        id: 1,
        title: "Complete HTML & CSS Mastery",
        short_description: "Build stunning websites from scratch with modern HTML5 and CSS3 techniques.",
        category: "Frontend",
        price: 29.99,
        original_price: 79.99,
        rating: 4.7,
        reviews: 2340,
        instructor: "Sarah Mitchell",
        level: "Beginner",
        duration: "22 hours",
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600",
        bestseller: true,
    },
    {
        id: 2,
        title: "JavaScript: Zero to Expert",
        short_description: "Deep dive into modern JavaScript — ES6+, async/await, and the DOM.",
        category: "Frontend",
        price: 49.99,
        original_price: 129.99,
        rating: 4.9,
        reviews: 5820,
        instructor: "James Hartwell",
        level: "Beginner to Advanced",
        duration: "68 hours",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600",
        bestseller: true,
    },
    {
        id: 3,
        title: "React & Next.js: Full Stack Development",
        short_description: "Build powerful full-stack apps with React 18, Next.js App Router, and more.",
        category: "Full Stack",
        price: 59.99,
        original_price: 149.99,
        rating: 4.8,
        reviews: 3910,
        instructor: "Anika Reeves",
        level: "Intermediate",
        duration: "55 hours",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
        bestseller: true,
    },
    {
        id: 4,
        title: "Node.js & Express: Backend Mastery",
        short_description: "Create scalable REST APIs and backend services with Node.js and Express.",
        category: "Backend",
        price: 44.99,
        original_price: 109.99,
        rating: 4.6,
        reviews: 2100,
        instructor: "Marcus Chen",
        level: "Intermediate",
        duration: "38 hours",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
        bestseller: false,
    },
    {
        id: 5,
        title: "Tailwind CSS: Rapid UI Development",
        short_description: "Design beautiful, responsive UIs at lightning speed with Tailwind CSS.",
        category: "Frontend",
        price: 24.99,
        original_price: 64.99,
        rating: 4.7,
        reviews: 1850,
        instructor: "Priya Nair",
        level: "Beginner",
        duration: "18 hours",
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600",
        bestseller: false,
    },
    {
        id: 6,
        title: "TypeScript for JavaScript Developers",
        short_description: "Add type safety to your JS projects and write more reliable code.",
        category: "Frontend",
        price: 34.99,
        original_price: 89.99,
        rating: 4.8,
        reviews: 1420,
        instructor: "David Osei",
        level: "Intermediate",
        duration: "26 hours",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600",
        bestseller: false,
    },
];



const LatestCourse = () => {
    return (
        <section className="py-12 px-4 bg-base-200">
            <div className="max-w-11/12 mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2">
                        What We Offer
                    </p>
                    <h2 className="text-4xl font-bold">Latest Courses</h2>
                    <p className="text-base-content/50 mt-3 max-w-md mx-auto">
                        Start learning today with our most popular and up-to-date courses.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Link href="/course" className="btn btn-outline border border-orange-600 hover:bg-orange-600 btn-wide">
                        View All Courses
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default LatestCourse;