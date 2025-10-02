import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-8">
            <Link 
              href="https://www.instagram.com/iden_tistylebarbershop?igsh=MTVtYWxmMngwZTJjZQ==" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://www.tiktok.com/@identistyle.barbe?_t=ZS-90D2p618b2d&_r=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              <TikTokIcon className="w-6 h-6" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link 
              href="https://www.facebook.com/profile.php?id=61579458737620&mibextid=wwXIfr&mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} IdentiStyle Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}