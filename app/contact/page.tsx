"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Twitter, Send, CheckCircle } from "lucide-react"
import { useState, FormEvent } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission, then open email client
    setTimeout(() => {
      const mailtoLink = `mailto:ngetichkevinhector@gmail.com?subject=${encodeURIComponent(
        `[Pick It] ${formData.subject === "general" ? "General Inquiry" : formData.subject === "bug" ? "Bug Report" : formData.subject === "feature" ? "Feature Request" : "Other"}: ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`

      window.location.href = mailtoLink
      setFormState("success")
    }, 500)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-6 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#008080] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-[#6B6B6B] text-lg mb-10 max-w-xl">
            Have a question, found a bug, or want to suggest a feature? We&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Contact Methods */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-display text-2xl text-[#1A1A1A]">Direct Contact</h2>

              {/* Email Card */}
              <a
                href="mailto:ngetichkevinhector@gmail.com"
                className="group block p-5 bg-[#F8F8F8] rounded-2xl hover:bg-[#008080]/5 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#008080]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#008080]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#008080]" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-[#1A1A1A] mb-1">Email</p>
                    <p className="font-sans text-sm text-[#008080] break-all">ngetichkevinhector@gmail.com</p>
                  </div>
                </div>
              </a>

              {/* Twitter Card */}
              <a
                href="https://twitter.com/KevinhectorN"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-[#F8F8F8] rounded-2xl hover:bg-[#008080]/5 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#008080]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#008080]/20 transition-colors">
                    <Twitter className="w-5 h-5 text-[#008080]" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-[#1A1A1A] mb-1">Twitter</p>
                    <p className="font-sans text-sm text-[#008080]">@KevinhectorN</p>
                  </div>
                </div>
              </a>

              <div className="pt-4">
                <p className="font-sans text-sm text-[#6B6B6B]">
                  Typical response time: <span className="text-[#1A1A1A]">Within 48 hours</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="p-6 md:p-8 bg-[#F8F8F8] rounded-2xl">
                <h2 className="font-display text-2xl text-[#1A1A1A] mb-6">Send a Message</h2>

                {formState === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#008080]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Email Client Opened</h3>
                    <p className="text-[#6B6B6B] mb-6">
                      Complete sending the message in your email app. We&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setFormState("idle")
                        setFormData({ name: "", email: "", subject: "general", message: "" })
                      }}
                      className="text-[#008080] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm font-medium text-[#1A1A1A] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-[#1A1A1A] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-sans text-sm font-medium text-[#1A1A1A] mb-2">
                        What&apos;s this about?
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="general">General Question</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-sans text-sm font-medium text-[#1A1A1A] mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#008080]/20 focus:border-[#008080] transition-colors resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1A1A1A] text-white rounded-2xl hover:bg-[#333] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Opening email...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white rounded-2xl hover:bg-[#333] transition-colors"
            >
              Back to Pick It
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
