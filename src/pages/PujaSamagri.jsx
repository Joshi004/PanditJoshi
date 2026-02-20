import PujaSamagriAccordion from '../components/PujaSamagriAccordion'
import { pujaSamagriList } from '../data/pujaSamagri'

export default function PujaSamagri() {
  return (
    <div className="bg-ivory-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-maroon-800 py-12 md:py-16 text-center">
        <p className="font-body text-saffron-300 uppercase tracking-widest text-sm mb-2">
          || Radhe Radhe ||
        </p>
        <h1 className="font-heading text-3xl md:text-5xl text-white font-bold mb-3">
          Puja Samagri
        </h1>
        <p className="font-body text-ivory-200 text-base md:text-lg max-w-xl mx-auto">
          A guide to items needed for each sacred ceremony. Bring these with you or arrange them
          before the puja begins.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-start gap-3 bg-gold-50 border border-gold-300 rounded-lg p-4">
          <span className="text-gold-500 text-2xl mt-0.5 flex-shrink-0">💡</span>
          <p className="font-body text-sm text-brown-700 leading-relaxed">
            Click on any puja name below to expand its samagri list. Items with no quantity listed
            (shown as <strong>—</strong>) should be brought as per availability — for example,
            fresh flowers.
          </p>
        </div>

        <div className="space-y-4">
          {pujaSamagriList.map((puja) => (
            <PujaSamagriAccordion key={puja.id} puja={puja} />
          ))}
        </div>

        {/* Contact nudge */}
        <div className="mt-12 text-center bg-saffron-50 border border-saffron-200 rounded-lg p-8">
          <h3 className="font-heading text-xl text-maroon-800 mb-2">
            Need help understanding what to bring?
          </h3>
          <p className="font-body text-brown-700 text-sm mb-4">
            Pandit Joshi is happy to guide you personally. Reach out and he will walk you through
            everything needed for your ceremony.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Pandit Joshi
          </a>
        </div>
      </div>
    </div>
  )
}
