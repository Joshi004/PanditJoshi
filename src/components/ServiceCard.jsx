export default function ServiceCard({ service }) {
  return (
    <div className="card flex flex-col items-center text-center gap-3 group">
      <span className="text-4xl mb-1">{service.icon}</span>
      <h3 className="font-heading text-lg text-maroon-800 font-semibold leading-tight">
        {service.name}
      </h3>
      <p className="font-body text-sm text-brown-700 leading-relaxed">{service.description}</p>
    </div>
  )
}
