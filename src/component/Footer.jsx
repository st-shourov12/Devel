// app/components/Footer.jsx
import Link from 'next/link';
import Logo from './Logo';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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
            <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <FaFacebook className='w-5 h-5 hover:text-blue-600'/>
            </a>
            <a href="https://www.linkedin.com/in/miraz-shourov" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <FaLinkedin className='w-5 h-5 hover:text-blue-400' />
            </a>
            <a href="https://shourovsc38@gmail.com" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <MdEmail className='w-5 h-5 hover:text-red-700' />
            </a>
            <a href="https://github.com/st-shourov12" target="_blank" className="btn btn-ghost btn-sm btn-circle">
              <FaGithub className='w-5 h-5 hover:text-blue-400' />
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
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-base-content/50">
          <p>© {new Date().getFullYear()} Devel. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;