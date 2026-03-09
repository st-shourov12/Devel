
const testimonials = [
  {
    id: 1,
    name: "Rakib Hasan",
    role: "Frontend Developer @ Shohoz",
    avatar: "RH",
    rating: 5,
    review:
      "Devel completely changed my career. I went from knowing nothing about web dev to landing my first frontend job in just 6 months. The project-based approach makes everything click.",
    course: "React & Next.js: Full Stack Development",
  },
  {
    id: 2,
    name: "Ayesha Siddiqua",
    role: "Full Stack Developer @ Chaldal",
    avatar: "AS",
    rating: 5,
    review:
      "The JavaScript course is absolutely incredible. James explains complex concepts in a way that actually makes sense. I've tried 5 other platforms — Devel is on another level.",
    course: "JavaScript: Zero to Expert",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Backend Engineer @ bKash",
    avatar: "TA",
    rating: 5,
    review:
      "The Node.js & Express course is exactly what I needed. Real-world examples, clean code practices, and Marcus explains everything thoroughly. Worth every taka.",
    course: "Node.js & Express: Backend Mastery",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Junior Developer @ Pathao",
    avatar: "NJ",
    rating: 5,
    review:
      "I was scared to start coding but the HTML & CSS course made it so easy. Sarah is an amazing instructor. Now I build responsive websites confidently every day.",
    course: "Complete HTML & CSS Mastery",
  },
  {
    id: 5,
    name: "Farhan Kibria",
    role: "Freelance Developer",
    avatar: "FK",
    rating: 4,
    review:
      "Tailwind CSS course saved me so much time. I used to spend hours writing custom CSS. Now I build beautiful UIs in minutes. The dashboard project at the end is chef's kiss.",
    course: "Tailwind CSS: Rapid UI Development",
  },
  {
    id: 6,
    name: "Sumaiya Islam",
    role: "Software Engineer @ BJIT",
    avatar: "SI",
    rating: 5,
    review:
      "TypeScript used to terrify me. After David's course I use it in every project. The way he explains generics and utility types is better than any documentation I've read.",
    course: "TypeScript for JavaScript Developers",
  },
];

const avatarColors = [
  "bg-primary",
  "bg-secondary",
  "bg-accent",
  "bg-success",
  "bg-warning",
  "bg-info",
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`text-lg ${s <= rating ? "text-warning" : "text-base-content/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Student Reviews
          </p>
          <h2 className="text-4xl font-bold mb-3">
            What Our Students <span className="text-primary">Say</span>
          </h2>
          <p className="text-base-content/55 max-w-md mx-auto">
            Over 42,000 developers have leveled up with Devel.
            Here is what some of them have to say.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-5xl font-bold text-primary">4.8</span>
            <div className="text-left">
              <StarRating rating={5} />
              <p className="text-sm text-base-content/50 mt-1">
                Based on 18,000+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="card bg-base-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body p-6 gap-4">

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Review */}
                <p className="text-base-content/70 text-sm leading-relaxed flex-1">
                  "{t.review}"
                </p>

                {/* Course tag */}
                <span className="badge badge-outline badge-sm text-primary border-primary/30 truncate max-w-full">
                  {t.course}
                </span>

                <div className="divider my-0" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`avatar placeholder`}>
                    <div className={`${avatarColors[i % avatarColors.length]} text-white rounded-full w-10`}>
                      <span className="text-sm font-bold">{t.avatar}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-base-content/45">{t.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;