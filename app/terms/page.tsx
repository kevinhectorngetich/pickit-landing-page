import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service — Pick It",
  description: "Terms of Service for Pick It mobile app",
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-[#6B6B6B] mb-10">Last updated: March 18, 2026</p>

          <div className="space-y-8 text-[#4B4B4B] leading-relaxed font-sans">
            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using Pick It ("the App"), you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">2. Description of Service</h2>
              <p>
                Pick It is a decision-making application that provides three interactive features:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Pick It</strong> — Randomly selects from a list of options you provide</li>
                <li><strong>Finger Pick</strong> — Multi-touch selection for group decisions</li>
                <li><strong>Spin Wheel</strong> — A customizable spinning wheel for random selection</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">3. User Accounts</h2>
              <p>
                The App does not require account creation for basic functionality. All decisions are processed locally
                on your device, and we do not collect or store your decision data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">4. In-App Purchases</h2>
              <p>
                The App offers a one-time upgrade for $1.99 USD that unlocks premium features. All purchases are
                processed through the respective app store (Apple App Store or Google Play Store) and are subject
                to their terms and refund policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the App to make decisions that could result in harm to yourself or others</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">6. Disclaimer</h2>
              <p>
                Pick It is provided for entertainment purposes only. The App uses random selection algorithms and
                should not be relied upon for critical decisions. We are not responsible for any outcomes resulting
                from decisions made using the App.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Pick It and its developers shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the App after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-3">9. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a
                  href="mailto:ngetichkevinhector@gmail.com"
                  className="text-[#008080] hover:underline"
                >
                  ngetichkevinhector@gmail.com
                </a>
              </p>
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
