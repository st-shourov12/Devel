// app/about/page.jsx

const stats = [
  { value: "42k+", label: "Students Enrolled" },
  { value: "8+", label: "Expert Courses" },
  { value: "4.8★", label: "Average Rating" },
  { value: "15+", label: "Instructors" },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Frontend Instructor",
    bio: "10+ years building modern web interfaces. Expert in React and CSS.",
    avatar: "SM",
    color: "bg-orange-600",
  },
  {
    name: "James Hartwell",
    role: "JavaScript Instructor",
    bio: "Full-time developer and educator passionate about teaching JS deeply.",
    avatar: "JH",
    color: "bg-secondary",
  },
  {
    name: "Anika Reeves",
    role: "Full Stack Instructor",
    bio: "Builds full-stack apps daily. Loves Next.js, Prisma, and clean code.",
    avatar: "AR",
    color: "bg-accent",
  },
  {
    name: "Marcus Chen",
    role: "Backend Instructor",
    bio: "Node.js and API specialist with a background in scalable systems.",
    avatar: "MC",
    color: "bg-success",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Practical Learning",
    desc: "Every course is built around real projects, not just theory.",
  },
  {
    icon: "🚀",
    title: "Always Up-to-Date",
    desc: "Our content stays current with the latest tools and frameworks.",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "Learn alongside thousands of developers at every skill level.",
  },
  {
    icon: "💡",
    title: "Expert Instructors",
    desc: "Learn from developers who build real products every day.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero */}
      <section className="bg-base-300 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-orange-600">Devel</span>
          </h1>
          <p className="text-base-content/60 text-lg leading-relaxed">
            Devel is a web development learning platform built by developers,
            for developers. Our mission is to make high-quality tech education
            accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-base-100">
        <div className="max-w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-orange-600">{s.value}</p>
              <p className="text-base-content/55 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-bold mb-4">
              Built by Developers, for Developers
            </h2>
            <p className="text-base-content/60 leading-relaxed mb-4">
              Devel started in 2022 when a group of developers realized that
              most online courses were either too shallow or too outdated.
              We set out to build a platform where every lesson reflects
              how real software is built today.
            </p>
            <p className="text-base-content/60 leading-relaxed">
              Today we have helped over 42,000 students land their first dev
              job, switch careers, or level up their existing skills — and
              we are just getting started.
            </p>
          </div>

          {/* Decorative Card */}
          <div className="card bg-base-100 shadow-lg p-8 flex flex-col gap-4">
            <div className="text-5xl">👨‍💻</div>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-base-content/60 leading-relaxed">
              To make world-class web development education accessible,
              affordable, and practical for every learner on the planet.
            </p>
            <div className="divider my-0" />
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="text-base-content/60 leading-relaxed">
              A world where anyone with curiosity and a laptop can become
              a professional developer — regardless of background.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-11/12 mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card bg-base-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-base mb-2">{v.title}</h3>
                <p className="text-base-content/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-11/12 mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
              The People Behind Devel
            </p>
            <h2 className="text-3xl font-bold">Meet Our Instructors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="card bg-base-100 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center p-6"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className={`avatar placeholder`}>
                    <div className={`${member.color} text-white rounded-full w-16`}>
                      <span className="text-xl font-bold">{member.avatar}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-base">{member.name}</h3>
                <p className="text-orange-600 text-sm mb-2">{member.role}</p>
                <p className="text-base-content/55 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-base-300 text-center">
        <div className="max-w-11/12 mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-base-content/55 mb-8">
            Join thousands of developers already growing with Devel.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/course" className="btn btn-orange-600 btn-lg">
              Browse Courses
            </a>
            <a href="/register" className="btn btn-outline btn-lg">
              Sign Up Free
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;