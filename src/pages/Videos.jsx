import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'

export default function Videos() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center">
        <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
          || Radhe Radhe ||
        </p>
        <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
          Videos
        </h1>
        <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
          Watch Pandit Joshi's ceremonies, bhajans, and devotional events.
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {videos.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🎬</span>
            <p className="font-body text-brown-600 text-lg">Videos coming soon. Stay tuned!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        )}

        {/* Notice */}
        <div className="mt-10 text-center bg-gold-50 border border-gold-300 rounded-lg p-6">
          <p className="font-body text-brown-700 text-sm">
            More videos are added regularly. For inquiries about recordings of ceremonies or bhajan
            events, please{' '}
            <a href="/contact" className="text-saffron-500 hover:underline font-semibold">
              contact Pandit Joshi
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
