import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-4xl">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
          <Link 
            href="/terms" 
            className="text-[#6B6B6B] hover:text-[#008080] transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <span className="text-[#D1D5DB]">·</span>
          <Link 
            href="/privacy" 
            className="text-[#6B6B6B] hover:text-[#008080] transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <span className="text-[#D1D5DB]">·</span>
          <Link 
            href="/contact" 
            className="text-[#6B6B6B] hover:text-[#008080] transition-colors text-sm"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-center text-sm text-[#9CA3AF]">
          © 2026 Pick It. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
