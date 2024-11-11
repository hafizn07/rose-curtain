import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Retail Sale of Wallpaper & Carpets",
    description:
      "Discover an exclusive range of wallpapers and carpets to elevate your interiors. Our collection features modern and classic designs, ensuring quality that brings warmth and style to every room. We provide expert guidance to help you choose the perfect textures and patterns that suit your taste.",
    imageUrl: "/assets/images/wallcarpet.jpg",
  },
  {
    title: "Curtain Cutting & Tailoring",
    description:
      "Our tailoring service offers customized curtain solutions that fit your unique space perfectly. From precise cutting to expert stitching, we provide an array of fabric choices and styles to ensure your curtains enhance your home’s ambiance and aesthetic, adding a touch of elegance to any room.",
    imageUrl: "/assets/images/tailoring.jpg",
  },
  {
    title: "Retail Sale of Curtains & Upholstery Cloths",
    description:
      "Explore our premium selection of curtains and upholstery fabrics, crafted to add sophistication and comfort to your home. Our fabrics come in a variety of textures and colors, providing durability and beauty that perfectly match any interior decor. We help you find the ideal fabric for your needs.",
    imageUrl: "/assets/images/upholstery.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
      <p className="text-lg max-w-3xl mx-auto mb-12">
        At Velvet Rose Curtains, we offer a range of premium services to help
        transform your home with elegance and style. From top-quality materials
        to tailored services, each offering is designed to meet your specific
        needs and aesthetic preferences.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
