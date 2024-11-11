import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        At Velvet Rose Curtains, we believe that every home deserves elegance
        and a unique touch. Our shop offers a wide selection of curtains,
        upholstery fabrics, wallpapers, and carpets. From helping you choose the
        right fabrics to providing custom tailoring and fitting, we are
        committed to transforming your home into a stylish, comfortable space
        that reflects your vision.
      </p>

      {/* Marquee for Large Screens, Grid for Small Screens */}
      <div className="relative mt-8 lg:flex overflow-x-hidden">
        {/* Marquee for larger screens */}
        <div className="hidden lg:flex py-12 animate-marquee whitespace-nowrap">
          {["curtain1.jpg", "sofa2.jpg", "curtain3.jpg", "sofa12.jpg"].map(
            (image, index) => (
              <Image
                key={index}
                src={`/assets/images/${image}`}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover mx-4"
              />
            )
          )}
        </div>

        <div className="absolute hidden lg:flex top-0 py-12 animate-marquee2 whitespace-nowrap">
          {["curtain1.jpg", "sofa3.jpg", "curtain3.jpg", "sofa8.jpg"].map(
            (image, index) => (
              <Image
                key={index + 4}
                src={`/assets/images/${image}`}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg shadow-lg object-cover mx-4"
              />
            )
          )}
        </div>

        {/* Grid for mobile screens */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {["curtain1.jpg", "sofa2.jpg", "curtain4.jpg", "sofa12.jpg", "curtain13.jpg", "sofa7.jpg"].map(
            (image, index) => (
              <Image
                key={index}
                src={`/assets/images/${image}`}
                alt={`Gallery Image ${index + 1}`}
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
