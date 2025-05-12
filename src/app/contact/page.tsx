'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message. I will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-[#F5E6D3]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#2C3E50]">Contact</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions about my work or interested in commissioning a piece? 
          I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4A7D6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4A7D6] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4A7D6] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="Purchase Inquiry">Purchase Inquiry</option>
                  <option value="Commission Request">Commission Request</option>
                  <option value="Exhibition Opportunity">Exhibition Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4A7D6] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B4A7D6] text-white px-6 py-3 rounded-lg hover:bg-[#2C3E50] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">Studio Location</h2>
              <p className="text-gray-600">
                123 Art Street<br />
                Creative District<br />
                City, Country 12345
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">Contact Information</h2>
              <p className="text-gray-600">
                Email: contact@anwarhamad.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">Studio Hours</h2>
              <p className="text-gray-600">
                Monday - Friday: 10:00 AM - 6:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-[#2C3E50]">Follow Me</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#B4A7D6] transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-[#B4A7D6] transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-[#B4A7D6] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 