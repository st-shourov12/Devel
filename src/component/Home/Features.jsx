// src/components/Features.jsx

import Link from "next/link";

const features = [
  {
    icon: "🎯",
    title: "Project-Based Learning",
    description: "Every course is built around real projects. You'll build actual apps, not just follow along with theory.",
  },
  {
    icon: "⚡",
    title: "Self-Paced Courses",
    description: "Learn at your own speed. No deadlines, no pressure. Revisit any lesson as many times as you need.",
  },
  {
    icon: "🏆",
    title: "Certificate on Completion",
    description: "Earn a verified certificate for every course you finish. Share it on LinkedIn and impress employers.",
  },
  {
    icon: "👨‍💻",
    title: "Expert Instructors",
    description: "Learn from developers who build real products every day — not just teachers who teach from textbooks.",
  },
  {
    icon: "💬",
    title: "Community Support",
    description: "Join a thriving community of 42,000+ developers. Ask questions, share projects, and grow together.",
  },
  {
    icon: "🔄",
    title: "Lifetime Access",
    description: "Pay once, access forever. All future updates to the course are included at no extra cost.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-11/12 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Devel
          </p>
          <h2 className="text-4xl font-bold mb-3">
            Everything You Need to <br />
            <span className="text-orange-600">Succeed as a Developer</span>
          </h2>
          <p className="text-base-content/55 max-w-md mx-auto">
            We built Devel with one goal — to give every developer the tools,
            knowledge, and support to go from zero to job-ready.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-base-200 hover:bg-base-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="card-body gap-3 p-6">
                {/* Icon */}
                <div className="text-4xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold">{feature.title}</h3>

                {/* Description */}
                <p className="text-base-content/55 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/course" className="btn border border-orange-600 hover:bg-orange-600 btn-wide">
            Start Learning Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Features;