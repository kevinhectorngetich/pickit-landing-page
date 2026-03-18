import Link from "next/link"
import { ArrowLeft, Shield, Database, Lock, Bell } from "lucide-react"

export const metadata = {
  title: "Privacy Policy — Pick It!",
  description: "Privacy Policy for Pick It! mobile app",
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
              { icon: Shield, label: "We Respect Privacy" },
              { icon: Database, label: "Local Storage" },
              { icon: Lock, label: "Data Encrypted" },
              { icon: Bell, label: "Transparent" },
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
                At Pick It!, we respect your privacy. This policy explains what data is collected when you use our app and how it is handled.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Information We Do NOT Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>We do NOT require account creation or login</li>
                <li>We do NOT collect your name, email, phone number, or address</li>
                <li>We do NOT collect your decision options, wheel items, or game results</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Information Collected Automatically</h2>
              <p className="mb-3">
                Our app uses third-party SDKs that may automatically collect the following data:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Device or Other IDs</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Advertising ID, device identifiers, and push notification tokens</li>
                    <li><strong>Collected by:</strong> Google AdMob, OneSignal, Firebase Cloud Messaging</li>
                    <li><strong>Purpose:</strong> Ad serving, push notifications, analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">App Interactions</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ad impressions, ad clicks, and in-app activity</li>
                    <li><strong>Collected by:</strong> Google AdMob</li>
                    <li><strong>Purpose:</strong> Advertising and analytics</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3">
                This data is collected and shared with these third-party services for the purposes described above. Data collection is required to use the app.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Local Data Storage</h2>
              <p>
                Your decision lists, wheel customizations, and preferences are stored locally on your device. This data never leaves your phone. If you delete the app, this data is removed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Third-Party Services</h2>
              <p className="mb-3">
                The app uses the following third-party services, each with their own privacy policies:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Google AdMob</strong> — Ad serving and measurement (
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">Privacy Policy</a>)
                </li>
                <li>
                  <strong>OneSignal</strong> — Push notifications (
                  <a href="https://onesignal.com/privacy_policy" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">Privacy Policy</a>)
                </li>
                <li>
                  <strong>Firebase Cloud Messaging</strong> — Push notifications (
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">Privacy Policy</a>)
                </li>
                <li>
                  <strong>Apple App Store / Google Play</strong> — App distribution and in-app purchases
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">In-App Purchases</h2>
              <p>
                If you make an in-app purchase (e.g., to remove ads), the transaction is handled by Apple/Google. We only receive confirmation of the purchase, not your payment details.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Data Encryption</h2>
              <p>
                All data transmitted from the app is encrypted in transit using industry-standard protocols (HTTPS/TLS).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Data Deletion</h2>
              <p>
                Since we do not maintain user accounts or store personal data on our servers, there is no user data for us to delete. Locally stored data is removed when you uninstall the app.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Children&apos;s Privacy</h2>
              <p>
                Our app is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
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
