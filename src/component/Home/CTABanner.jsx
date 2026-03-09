

import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="py-16 px-4 bg-orange-400">
      <div className="max-w-11/12 mx-auto text-center">

        {/* Badge */}
        <span className="badge badge-outline text-primary-content border-primary-content/40 mb-6">
          🚀 Limited Time — 70% Off All Courses
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Start Your Dev Journey <br /> Today — Not Tomorrow
        </h2>

        {/* Subtitle */}
        <p className="text-white-content/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join 42,000+ developers who chose Devel to launch their careers.
          Real projects. Expert instructors. Lifetime access.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/course" className="btn btn-neutral btn-lg">
            Browse Courses
          </Link>
          <Link href="/register" className="btn btn-outline text-primary-content border-primary-content hover:bg-primary-content hover:text-orange-600 btn-lg">
            Sign Up Free
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "42k+", label: "Students" },
            { value: "8+", label: "Courses" },
            { value: "4.8★", label: "Avg Rating" },
            { value: "100%", label: "Online" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-primary-content/20 rounded-2xl py-4 px-2"
            >
              <span className="text-3xl font-bold text-primary-content">
                {stat.value}
              </span>
              <span className="text-sm text-primary-content/65">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CTABanner;