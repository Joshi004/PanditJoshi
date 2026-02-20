import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

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
          <span className="text-5xl block mb-3">{post.coverEmoji}</span>
          <p className="font-body text-saffron-300 uppercase tracking-widest text-xs mb-2">
            {post.date}
          </p>
          <h1 className="font-heading text-2xl md:text-4xl text-white font-bold max-w-3xl mx-auto px-4 leading-snug">
            {post.title}
          </h1>
        </motion.div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <AnimatedSection variant="fadeIn">
          <div className="mb-8">
            <Link to="/blog" className="font-body text-sm text-saffron-500 hover:underline">
              ← Back to Dharma Insights
            </Link>
          </div>
        </AnimatedSection>

        {/* Excerpt */}
        <AnimatedSection variant="fadeUp" delay={0.05}>
          <p className="font-body text-lg text-brown-700 leading-relaxed mb-8 italic border-l-4 border-gold-400 pl-5">
            {post.excerpt}
          </p>
          <div className="w-16 h-1 bg-gold-400 mb-8 rounded-full" />
        </AnimatedSection>

        {/* Sections */}
        <div className="space-y-8">
          {post.body.map((section, idx) => (
            <AnimatedSection key={idx} variant="fadeUp" delay={idx * 0.04}>
              <h2 className="font-heading text-xl md:text-2xl text-maroon-800 font-semibold mb-3">
                {section.heading}
              </h2>
              <p className="font-body text-brown-700 text-base leading-relaxed">{section.text}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer CTA */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="mt-14 border-t border-gold-300 pt-8 text-center">
          <p className="font-heading text-xl text-maroon-800 mb-4">|| Radhe Radhe ||</p>
          <p className="font-body text-brown-700 text-sm mb-6">
            To schedule a ceremony or learn more about Hindu traditions, feel free to get in touch
            with Pandit Joshi.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/contact" className="btn-primary inline-block">
              Contact Pandit Joshi
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  )
}
