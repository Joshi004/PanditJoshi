import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center">
        <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
          || Radhe Radhe ||
        </p>
        <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
          Dharma Insights
        </h1>
        <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
          Wisdom and stories from our sacred traditions — shared by Pandit Joshi.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
