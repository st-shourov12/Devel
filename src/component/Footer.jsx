// app/components/Footer.jsx
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">

      {/* Main Footer */}
      <div className="max-w-11/12 mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          
          <Logo></Logo>
          <p className="text-base-content/55 text-sm leading-relaxed">
            Learn web development the right way. Real projects, expert instructors, real results.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-base-content/60">
            <li><Link href="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
            <li><Link href="/course" className="hover:text-orange-600 transition-colors">Courses</Link></li>
            <li><Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-orange-600 transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base">Categories</h3>
          <ul className="flex flex-col gap-2 text-sm text-base-content/60">
            <li><Link href="/course?category=Frontend" className="hover:text-orange-600 transition-colors">Frontend</Link></li>
            <li><Link href="/course?category=Backend" className="hover:text-orange-600 transition-colors">Backend</Link></li>
            <li><Link href="/course?category=Full Stack" className="hover:text-orange-600 transition-colors">Full Stack</Link></li>
            <li><Link href="/course?category=Tools" className="hover:text-orange-600 transition-colors">Tools</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm text-base-content/60">
            <li>📧 support@devel.com</li>
            <li>📞 +880 1234 567890</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-content/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-base-content/50">
          <p>© {new Date().getFullYear()} Devel. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;