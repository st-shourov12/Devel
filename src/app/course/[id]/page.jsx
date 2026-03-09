// app/course/[id]/page.jsx

import courses from '@/data/course.json';
import Image from 'next/image';
import Link from 'next/link';

const CourseDetails = async({ params }) => {
    const { id } = await params;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
          <Link href="/course" className="btn btn-primary">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((course.original_price - course.price) / course.original_price) * 100);

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link href="/course" className="btn btn-ghost btn-sm mb-6">
          ← Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — Main Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Banner Image */}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden">
              <Image
                src={course?.image}
                alt={course?.title}
                fill
                className="object-cover"
              />
              {course.bestseller && (
                <span className="badge badge-warning absolute top-4 left-4 badge-lg">
                  Bestseller
                </span>
              )}
            </div>

            {/* Title & Meta */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className="badge bg-orange-600">{course?.category}</span>
                <span className="badge badge-ghost">{course?.level}</span>
              </div>
              <h1 className="text-3xl font-bold leading-snug mb-3">
                {course?.title}
              </h1>
              <p className="text-base-content/60 text-base leading-relaxed">
                {course?.full_description}
              </p>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-12">
                  <span className="text-lg font-bold">
                    {course?.instructor.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div>
                <p className="font-semibold">{course?.instructor}</p>
                <p className="text-sm text-base-content/50">Course Instructor</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
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
              <span className="font-bold">{course?.rating}</span>
              <span className="text-sm text-base-content/40">
                ({course?.reviews.toLocaleString()} reviews)
              </span>
              <span className="text-sm text-base-content/40">
                · {course?.students.toLocaleString()} students
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="badge badge-neutral badge-lg">
                  {tag}
                </span>
              ))}
            </div>

            {/* What you'll learn */}
            <div className="bg-base-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">What You will Learn</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course?.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-sm">
                    <span className="text-success font-bold">✓</span>
                    {tag} fundamentals & best practices
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success font-bold">✓</span>
                  Real-world project experience
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-success font-bold">✓</span>
                  Industry-standard workflows
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT — Sticky Purchase Card */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl sticky top-6">
              <div className="card-body gap-4">

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold">${course?.price}</span>
                    <span className="text-lg text-base-content/40 line-through">
                      ${course?.original_price}
                    </span>
                  </div>
                  <span className="badge badge-error mt-1">{discount}% OFF</span>
                </div>

                <button className="btn bg-orange-600 btn-block btn-lg">
                  Enroll Now
                </button>
                <button className="btn btn-outline btn-block">
                  Add to Wishlist
                </button>

                <div className="divider my-0" />

                {/* Course Meta */}
                <ul className="flex flex-col gap-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-base-content/50">Duration</span>
                    <span className="font-semibold">{course?.duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-base-content/50">Lectures</span>
                    <span className="font-semibold">{course?.lectures}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-base-content/50">Level</span>
                    <span className="font-semibold">{course?.level}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-base-content/50">Students</span>
                    <span className="font-semibold">{course?.students.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-base-content/50">Published</span>
                    <span className="font-semibold">{course?.published}</span>
                  </li>
                </ul>

                <div className="divider my-0" />

                <p className="text-xs text-center text-base-content/40">
                  30-Day Money-Back Guarantee
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
