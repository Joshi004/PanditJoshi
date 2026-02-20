import { motion } from 'framer-motion'
import BlogCard, { FeaturedBlogCard } from '../components/BlogCard'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center relative overflow-hidden lotus-header-bg">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <span className="font-heading text-white opacity-5 text-[14rem] leading-none">ॐ</span>
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
            || Radhe Radhe ||
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
            Dharma Insights
          </h1>
          <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
            Wisdom and stories from our sacred traditions — shared by Pandit Joshi.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Featured Post */}
        {featured && (
          <AnimatedSection variant="fadeUp">
            <FeaturedBlogCard post={featured} />
          </AnimatedSection>
        )}

        {/* Remaining Posts Grid */}
        {rest.length > 0 && (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.1}
            delayChildren={0.1}
          >
            {rest.map((post) => (
              <AnimatedItem key={post.slug} variant="fadeUp">
                <BlogCard post={post} />
              </AnimatedItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  )
}
