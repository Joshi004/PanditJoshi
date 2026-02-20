export default function VideoCard({ video }) {
  return (
    <div className="bg-ivory-50 border border-gold-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* YouTube Embed — responsive 16:9 */}
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
      <div className="p-4">
        <h3 className="font-heading text-lg text-maroon-800 font-semibold mb-1">{video.title}</h3>
        <p className="font-body text-sm text-brown-700 leading-relaxed">{video.description}</p>
      </div>
    </div>
  )
}
