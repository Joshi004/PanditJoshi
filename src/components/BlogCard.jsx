import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <article className="bg-ivory-50 border border-gold-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col md:flex-row">
      {/* Decorative emoji panel */}
      <div className="bg-saffron-500 flex items-center justify-center text-6xl p-8 md:w-40 flex-shrink-0">
        {post.coverEmoji}
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <span className="font-body text-xs uppercase tracking-widest text-saffron-500 font-semibold">
            {post.date}
          </span>
          <h2 className="font-heading text-xl md:text-2xl text-maroon-800 font-semibold mt-1 mb-3 leading-tight">
            {post.title}
          </h2>
          <p className="font-body text-sm text-brown-700 leading-relaxed">{post.excerpt}</p>
        </div>
        <div className="mt-5">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-body font-semibold text-saffron-500 hover:text-saffron-600 transition-colors text-sm"
          >
            Read More <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
