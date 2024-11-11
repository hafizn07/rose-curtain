import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-100">
              Velvet Rose Curtain
            </h2>
            <p className="mt-2 text-gray-400">
              Adding elegance to every room with custom-made solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-center md:text-left space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <Link href="/" className="text-gray-400 hover:text-gray-100">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-gray-100">
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-400 hover:text-gray-100"
            >
              Services
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-gray-100">
              Contact
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col text-center md:text-left space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start text-gray-400">
              <FaMapMarkerAlt className="mr-2" /> Behind Etisalat Khalidiya, Abu Dhabi, UAE
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-400">
              <FaPhoneAlt className="mr-2" /> +971 56 123 0386 <br />+971 56 358 2352
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-400">
              <FaEnvelope className="mr-2" /> contact@velvetrose.com
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" className="text-gray-400 hover:text-gray-100">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-100">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Velvet Rose Curtain. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
