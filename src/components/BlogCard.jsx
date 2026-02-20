import { Link } from 'react-router-dom'

export function FeaturedBlogCard({ post }) {
  return (
    <article className="relative bg-white border border-gold-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Decorative gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-saffron-500 via-gold-400 to-saffron-400" />
      <div className="p-8 md:p-10">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-saffron-500 bg-saffron-50 border border-saffron-200 px-3 py-1 rounded-full">
            Featured
          </span>
          <span className="font-body text-xs text-brown-600">{post.date}</span>
        </div>
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-3xl text-maroon-800 font-bold leading-tight mb-4 group-hover:text-saffron-600 transition-colors duration-200">
          {post.title}
        </h2>
        {/* Divider */}
        <div className="w-12 h-0.5 bg-gold-400 mb-5 rounded-full" />
        {/* Excerpt */}
        <p className="font-body text-brown-700 text-base leading-relaxed mb-6">
          {post.excerpt}
        </p>
        {/* Read More */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 font-body font-bold text-sm text-white bg-maroon-800 hover:bg-maroon-700 px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Read Article
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function BlogCard({ post }) {
  return (
    <article className="bg-white border border-gold-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gold-300 group-hover:bg-saffron-400 transition-colors duration-200" />
      <div className="p-6 flex flex-col flex-1">
        {/* Date */}
        <span className="font-body text-xs uppercase tracking-widest text-brown-600 mb-2">
          {post.date}
        </span>
        {/* Title */}
        <h2 className="font-heading text-xl text-maroon-800 font-semibold leading-snug mb-3 group-hover:text-saffron-600 transition-colors duration-200">
          {post.title}
        </h2>
        {/* Excerpt */}
        <p className="font-body text-sm text-brown-700 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        {/* Read More */}
        <div className="mt-5 pt-4 border-t border-gold-100">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-saffron-500 hover:text-saffron-600 transition-colors duration-200"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
