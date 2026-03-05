export default function VideoCard({ video }) {
  if (video.isShort) {
    return (
      <div className="bg-white border border-gold-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
        {/* YouTube Embed — 9:16 for Shorts */}
        <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* Card body */}
        <div className="px-4 py-3 border-t border-gold-100">
          <h3 className="font-heading text-sm text-maroon-800 font-semibold mb-1 group-hover:text-saffron-600 transition-colors duration-200">
            {video.title}
          </h3>
          <p className="font-body text-xs text-brown-700 leading-relaxed">{video.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gold-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
      {/* YouTube Embed — 16:9 */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* Card body */}
      <div className="px-5 py-4 border-t border-gold-100">
        <h3 className="font-heading text-base text-maroon-800 font-semibold mb-1 group-hover:text-saffron-600 transition-colors duration-200">
          {video.title}
        </h3>
        <p className="font-body text-sm text-brown-700 leading-relaxed">{video.description}</p>
      </div>
    </div>
  )
}
