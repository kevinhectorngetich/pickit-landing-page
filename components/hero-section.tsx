"use client"

import { Apple, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-4">
          {"Can't Decide? "}
          <span className="text-[#008080]">Pick It.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto mb-10 leading-relaxed">
          Three fun ways to make decisions — whether it's just you or a whole group.
          No more arguments, no more coin flips.
        </p>

        {/* Phone Mockup */}
        <div className="relative mx-auto w-64 md:w-72 mb-10">
          <div className="relative bg-[#1A1A1A] rounded-[40px] p-3 shadow-xl">
            <div className="bg-white rounded-[32px] aspect-9/19 flex items-center justify-center overflow-hidden">
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#008080]/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-[#008080]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="font-display text-2xl text-[#008080] font-bold">Pick It</p>
                <p className="font-sans text-sm text-[#6B6B6B] mt-2">Tap to decide!</p>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1A1A1A] rounded-full" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#008080] rounded-full opacity-60" />
          <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-[#008080]/20 rounded-lg rotate-12" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-3 bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl hover:bg-[#2A2A2A] transition-colors shadow-lg">
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs opacity-80">Download on the</p>
              <p className="text-base font-semibold">App Store</p>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl hover:bg-[#2A2A2A] transition-colors shadow-lg">
            <Play className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs opacity-80">Get it on</p>
              <p className="text-base font-semibold">Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
