

import Image from "next/image";
import Link from "next/link";

import posts from '@/data/blog.json'

const categoryColors = {
  JavaScript: "badge-warning",
  "Next.js":  "badge-info",
  CSS:        "badge-secondary",
  Backend:    "badge-success",
  Frontend:   "badge-primary",
  Tools:      "badge-neutral",
};

const BlogCard = ({ post }) => {
  return (
    <div className="card bg-base-100 shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <figure>
        <Image
          src={post?.image}
          alt={post?.title}
          width={100}
          height={192}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body gap-3 p-5">

        {/* Category + Read time */}
        <div className="flex items-center justify-between">
          <span className={`badge ${categoryColors[post?.category] || "badge-neutral"} badge-sm`}>
            {post?.category}
          </span>
          <span className="text-xs text-base-content/40">{post?.read_time}</span>
        </div>

        {/* Title */}
        <h2 className="card-title text-base leading-snug line-clamp-2">
          {post?.title}
        </h2>

        {/* Description */}
        <p className="text-base-content/55 text-sm line-clamp-2 leading-relaxed">
          {post?.short_description}
        </p>

        {/* Author + Date */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-base-content/10">
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-7">
                <span className="text-xs font-bold">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
            </div>
            <span className="text-xs font-medium">{post?.author}</span>
          </div>
          <span className="text-xs text-base-content/40">{post?.date}</span>
        </div>

        {/* Read More */}
        <Link href={`/blog/${post?.id}`} className="btn bg-orange-600 btn-sm btn-block mt-1">
          Read More
        </Link>

      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-base-200">

      {/* Header */}
      <section className="bg-base-300 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Blog
          </p>
          <h1 className="text-4xl font-bold mb-3">
            Dev Insights & Tutorials
          </h1>
          <p className="text-base-content/55 text-base">
            Tips, tutorials, and deep dives from our instructors and the Devel community.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-14 px-4">
        <div className="max-w-11/12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post?.id} post={post} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;