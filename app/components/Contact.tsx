"use client";

import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 px-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-center"
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Have questions or need assistance? Reach out to us at Velvet Rose
          Curtains. We’re here to help you create the perfect ambiance.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Information */}
          <div className="text-left md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Our Contact Details
            </h3>
            <div className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-red-500 mt-1 mr-3" size={20} />
              <div>
                <p className="text-gray-700 font-medium">Our Address</p>
                <p className="text-gray-600">Velvet Rose Curtain</p>
                <p className="text-gray-600">
                  Behind Etisalat Khalidiya, Abu Dhabi, UAE
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-green-500 mt-1 mr-3" size={20} />
              <div>
                <p className="text-gray-700 font-medium">Contact Number</p>
                <p className="text-gray-600">+971 56 123 0386</p>
                <p className="text-gray-600">+971 56 358 2352</p>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <button
              className="mt-6 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-slate-700 transition-all"
              onClick={() => (window.location.href = "tel:+971561230386")}
            >
              Contact Us
            </button>
          </div>

          {/* Google Map Embed */}
          <div className="md:w-1/2 w-full border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4255.315267722935!2d54.355952875970665!3d24.4784443781808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI4JzQyLjQiTiA1NMKwMjEnMzAuNyJF!5e1!3m2!1sen!2sae!4v1731227113403!5m2!1sen!2sae"
              width="100%"
              height="450"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
