import { motion } from 'framer-motion'
import VideoCard from '../components/VideoCard'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
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
  const shorts = videos.filter((v) => v.isShort)
  const regularVideos = videos.filter((v) => !v.isShort)

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

      {/* Video Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {videos.length === 0 ? (
          <AnimatedSection variant="scaleIn" className="text-center py-20">
            <VideoPlaceholderIcon />
            <p className="font-body text-brown-600 text-lg mt-4">Videos coming soon. Stay tuned!</p>
          </AnimatedSection>
        ) : (
          <div className="space-y-14">

            {/* Shorts Section */}
            {shorts.length > 0 && (
              <AnimatedSection variant="fadeUp">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-saffron-50 border border-saffron-200 rounded-full px-3 py-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-saffron-500">
                      <path d="M17.77 10.32l-1.2-.5L18 9.06a4 4 0 00-5.34-5.93L12 3.68l-.66-.55a4 4 0 00-5.34 5.93l5.65 5.65a.48.48 0 00.68 0l5-5a.44.44 0 00.04-.07 4 4 0 00-2.1-6.54A5.44 5.44 0 0117.77 10.32z"/>
                      <path d="M10 15l-3-3-4 4 3 3zM20.71 19.29l-3-3-1.41 1.41 3 3a1 1 0 001.41-1.41z"/>
                    </svg>
                    <span className="font-body text-xs font-semibold text-saffron-600 uppercase tracking-wider">Shorts</span>
                  </span>
                  <div className="flex-1 h-px bg-gold-200" />
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  {shorts.map((video, idx) => (
                    <AnimatedItem key={`short-${idx}`} variant="fadeUp" className="w-full max-w-[260px]">
                      <VideoCard video={video} />
                    </AnimatedItem>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Regular Videos Section */}
            {regularVideos.length > 0 && (
              <AnimatedSection variant="fadeUp">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-maroon-50 border border-maroon-200 rounded-full px-3 py-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-maroon-700">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span className="font-body text-xs font-semibold text-maroon-700 uppercase tracking-wider">Videos</span>
                  </span>
                  <div className="flex-1 h-px bg-gold-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularVideos.map((video, idx) => (
                    <AnimatedItem key={`regular-${idx}`} variant="fadeUp">
                      <VideoCard video={video} />
                    </AnimatedItem>
                  ))}
                </div>
              </AnimatedSection>
            )}

          </div>
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
