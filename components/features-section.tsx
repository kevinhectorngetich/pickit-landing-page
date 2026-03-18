import { Hand, Users, Circle } from "lucide-react"

const features = [
  {
    icon: Hand,
    title: "Pick It",
    description:
      "Enter two choices, hand the phone to a friend, and let them blindly pick A or B. A dramatic paper-unfolding animation reveals the answer in landscape mode. There's even a \"Surprise Me\" button for when nobody wants to choose.",
  },
  {
    icon: Users,
    title: "Finger Pick",
    description:
      "Up to 10 people place their fingers on the screen at once. After a suspenseful countdown, the app randomly picks 1 or 2 winners. Perfect for \"who pays the bill?\" or \"who goes first?\"",
  },
  {
    icon: Circle,
    title: "Spin Wheel",
    description:
      "Build a custom wheel with up to 8 options, then fling to spin. Great for picking restaurants, activities, dares — anything. The result pops up big and clear.",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-16 bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12">
          Three Ways to <span className="text-[#008080]">Decide</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#008080]/10 rounded-2xl flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-[#008080]" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[#6B6B6B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
