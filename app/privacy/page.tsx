import Link from "next/link"
import { ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react"

export const metadata = {
  title: "Privacy Policy — Pick It",
  description: "Privacy Policy for Pick It mobile app",
}

export default function PrivacyPage() {
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
          <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-2">
            Privacy Policy
          </h1>
          <p className="text-[#6B6B6B] mb-10">Last updated: March 18, 2026</p>

          {/* Privacy Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Shield, label: "Privacy First" },
              { icon: Eye, label: "No Tracking" },
              { icon: Database, label: "Local Storage" },
              { icon: Lock, label: "Your Data, Yours" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 p-4 bg-[#F8F8F8] rounded-2xl"
              >
                <div className="w-10 h-10 bg-[#008080]/10 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#008080]" />
                </div>
                <span className="text-sm text-[#4B4B4B] text-center">{label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-8 text-[#4B4B4B] leading-relaxed font-sans">
            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Our Commitment</h2>
              <p>
                At Pick It, we believe your decisions are your business. We built this app with privacy at its core,
                which means we collect as little data as possible — and in most cases, none at all.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Information We Do NOT Collect</h2>
              <p className="mb-3">
                Let&apos;s start with what we <strong>don&apos;t</strong> do:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>We do NOT collect your decision options or results</li>
                <li>We do NOT track your usage patterns or behavior</li>
                <li>We do NOT sell any data to third parties</li>
                <li>We do NOT use advertising SDKs that track you</li>
                <li>We do NOT require account creation or login</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Information We May Collect</h2>
              <p className="mb-3">
                In limited circumstances, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Crash Reports:</strong> If the app crashes, anonymous crash data may be collected
                  through Apple or Google&apos;s standard crash reporting to help us fix bugs.
                </li>
                <li>
                  <strong>Purchase Information:</strong> If you make an in-app purchase, the transaction is
                  handled entirely by Apple/Google. We only receive confirmation of the purchase, not your
                  payment details.
                </li>
                <li>
                  <strong>Support Communications:</strong> If you contact us for support, we&apos;ll have access
                  to the information you choose to share in your message.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Local Data Storage</h2>
              <p>
                All your decision lists, wheel customizations, and preferences are stored locally on your device.
                This data never leaves your phone unless you explicitly choose to share it. If you delete the app,
                this data is permanently removed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Third-Party Services</h2>
              <p>
                The app uses the following third-party services:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Apple App Store / Google Play:</strong> For app distribution and in-app purchases</li>
              </ul>
              <p className="mt-2">
                These services have their own privacy policies that govern their data practices.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Children&apos;s Privacy</h2>
              <p>
                Pick It is safe for all ages. We do not knowingly collect any personal information from children
                under 13. The app can be used without providing any personal data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please reach out:
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="mailto:ngetichkevinhector@gmail.com"
                  className="inline-flex items-center gap-2 text-[#008080] hover:underline"
                >
                  ngetichkevinhector@gmail.com
                </a>
                <a
                  href="https://twitter.com/KevinhectorN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#008080] hover:underline"
                >
                  @KevinhectorN on Twitter
                </a>
              </div>
            </section>
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
