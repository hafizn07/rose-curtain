import Link from "next/link";
import { ImageGallery } from "./ImageGallery";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function About() {
  const images = [
    {
      src: "/assets/images/curtain1.jpg",
      alt: "Curtain 1",
      width: 300,
      height: 200,
    },
    { src: "/assets/images/sofa2.jpg", alt: "Sofa 2", width: 300, height: 200 },
    {
      src: "/assets/images/curtain3.jpg",
      alt: "Curtain 3",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/sofa12.jpg",
      alt: "Sofa 12",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain4.jpg",
      alt: "Curtain 4",
      width: 300,
      height: 200,
    },
    { src: "/assets/images/sofa8.jpg", alt: "Sofa 8", width: 300, height: 200 },
    {
      src: "/assets/images/curtain13.jpg",
      alt: "Curtain 13",
      width: 300,
      height: 200,
    },
    { src: "/assets/images/sofa7.jpg", alt: "Sofa 7", width: 300, height: 200 },
    {
      src: "/assets/images/curtain2.jpg",
      alt: "Curtain 2",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain5.jpg",
      alt: "Curtain 5",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain9.jpg",
      alt: "Curtain 9",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain15.jpg",
      alt: "Curtain 15",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain17.jpg",
      alt: "Curtain 17",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain19.jpg",
      alt: "Curtain 19",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain16.jpg",
      alt: "Curtain 16",
      width: 300,
      height: 200,
    },
    {
      src: "/assets/images/curtain18.jpg",
      alt: "Curtain 18",
      width: 300,
      height: 200,
    },
  ];

  return (
    <section
      id="about"
      className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        At Velvet Rose Curtains, we believe that every home deserves elegance
        and a unique touch. Our shop offers a wide selection of curtains,
        upholstery fabrics, wallpapers, and carpets. From helping you choose the
        right fabrics to providing custom tailoring and fitting, we are
        committed to transforming your home into a stylish, comfortable space
        that reflects your vision.
      </p>

      <ImageGallery images={images} />

      {/* Social Media Section */}
      <div className="mt-8 text-center">
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Explore more of our recent works, inspirations, and items on our
          social media platforms. Stay connected and discover what Velvet Rose
          Curtains has to offer!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0">
          <Link
            href="https://www.facebook.com/share/173q7c83Eh/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-center"
          >
            <FaFacebookF className="w-6 h-6 mr-2" />
            Visit us on Facebook
          </Link>
          <Link
            href="https://www.instagram.com/abdulbasheerkunnil/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition text-center"
          >
            <FaInstagram className="w-6 h-6 mr-2" />
            Follow us on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
