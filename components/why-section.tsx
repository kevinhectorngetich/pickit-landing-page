import { Check } from "lucide-react"

const reasons = [
  "Three games in one app",
  "Party-ready — designed for groups",
  "Playful hand-drawn aesthetic with fun animations",
  "Zero learning curve — rules explained in 2 sentences",
  "One-time $1.99 upgrade removes ads forever — no subscriptions",
]

export function WhySection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-10">
          Why <span className="text-[#008080]">Pick It?</span>
        </h2>

        <ul className="space-y-4 text-left max-w-md mx-auto">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </span>
              <span className="font-sans text-lg text-[#4A4A4A]">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
