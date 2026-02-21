import { motion } from 'framer-motion'
import VideoCard from '../components/VideoCard'
import AnimatedSection, { StaggerContainer, AnimatedItem } from '../components/AnimatedSection'
import { videos } from '../data/videos'

function VideoPlaceholderIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="32" cy="32" r="28" fill="#fdecd6" stroke="#E8751A" strokeWidth="1.5"/>
      <path d="M26 22 L26 42 L46 32 Z" fill="#E8751A"/>
      <path d="M20 32 Q22 24 30 22" stroke="#C5962E" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 2"/>
    </svg>
  )
}

export default function Videos() {
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
            Videos
          </h1>
          <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
            Watch Pandit Joshi's ceremonies, bhajans, and devotional events.
          </p>
        </motion.div>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {videos.length === 0 ? (
          <AnimatedSection variant="scaleIn" className="text-center py-20">
            <VideoPlaceholderIcon />
            <p className="font-body text-brown-600 text-lg mt-4">Videos coming soon. Stay tuned!</p>
          </AnimatedSection>
        ) : (
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
            delayChildren={0.1}
          >
            {videos.map((video, idx) => (
              <AnimatedItem key={idx} variant="fadeUp">
                <VideoCard video={video} />
              </AnimatedItem>
            ))}
          </StaggerContainer>
        )}

        {/* Notice */}
        <AnimatedSection variant="fadeUp" delay={0.2} className="mt-10">
          <div className="text-center bg-gold-50 border border-gold-300 rounded-xl p-6">
            <p className="font-body text-brown-700 text-sm">
              More videos are added regularly. For inquiries about recordings of ceremonies or bhajan
              events, please{' '}
              <a href="/contact" className="text-saffron-500 hover:underline font-semibold">
                contact Pandit Joshi
              </a>
              .
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
