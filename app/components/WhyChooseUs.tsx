import { FaRegStar, FaHandHoldingHeart, FaTools } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section id="chooseus" className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-10">
        At Velvet Rose Curtains, we combine quality with a personal touch, tailoring every service to your unique style and needs. Discover why we stand out in transforming spaces with elegance and expertise.
      </p>
      
      {/* Reasons Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaRegStar className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Products</h3>
          <p className="text-gray-600">
            We offer premium quality fabrics, wallpapers, and carpets, ensuring durability and timeless style in every product.
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaHandHoldingHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
          <p className="text-gray-600">
            From consultation to installation, our team tailors each service to your specific vision, ensuring a personalized experience.
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaTools className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Craftsmanship</h3>
          <p className="text-gray-600">
            Our skilled craftsmen provide tailored curtain cutting, upholstery, and fitting services to create beautiful, bespoke results.
          </p>
        </div>
      </div>
    </section>
  );
}
