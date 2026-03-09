// app/blog/[id]/page.jsx

import Link from 'next/link';
import Image from 'next/image';

import posts from '@/data/blog.json'

const BlogDetail = async ({ params }) => {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
          <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-10/12 mx-auto">

        {/* Back */}
        <Link href="/blog" className="btn btn-ghost btn-sm mb-6">
          ← Back to Blog
        </Link>

        {/* Banner */}
        <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-8">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="badge badge-primary">{post.category}</span>
          <span className="text-sm text-base-content/45">{post.read_time}</span>
          <span className="text-sm text-base-content/45">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-snug mb-4">{post.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-base-content/10">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span className="font-bold">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">{post.author}</p>
            <p className="text-xs text-base-content/45">Devel Instructor</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-base-content/75 leading-relaxed whitespace-pre-line mb-10">
          {post.full_description}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <span key={tag} className="badge badge-neutral badge-lg">{tag}</span>
          ))}
        </div>

        {/* Back CTA */}
        <div className="text-center">
          <Link href="/blog" className="btn btn-outline border border-orange-600 hover:bg-orange-600 btn-wide">
            ← Back to All Posts
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
