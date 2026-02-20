import { useState } from 'react'

const initialForm = { name: '', phone: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="text-5xl mb-4">🙏</span>
        <h3 className="font-heading text-2xl text-maroon-800 mb-2">Message Received!</h3>
        <p className="font-body text-brown-700 text-base mb-6 max-w-sm">
          Thank you for reaching out. Pandit Joshi will get back to you shortly.
        </p>
        <p className="font-heading text-xl text-saffron-500 italic">|| Radhe Radhe ||</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-brown-600 hover:text-maroon-800 underline font-body"
        >
          Send another message
        </button>
      </div>
    )
  }

  const fieldClass = (name) =>
    `w-full px-4 py-3 rounded-md border font-body text-sm text-brown-900 bg-white focus:outline-none focus:ring-2 focus:ring-saffron-400 transition-colors ${
      errors[name] ? 'border-red-400' : 'border-gold-300'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block font-body text-sm font-semibold text-brown-800 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={fieldClass('name')}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-body text-sm font-semibold text-brown-800 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g. 404-555-1234"
          className={fieldClass('phone')}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block font-body text-sm font-semibold text-brown-800 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="yourname@email.com"
          className={fieldClass('email')}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block font-body text-sm font-semibold text-brown-800 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell Pandit Joshi about your ceremony or question..."
          className={fieldClass('message')}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full text-center text-base">
        Send Message 🙏
      </button>
    </form>
  )
}
