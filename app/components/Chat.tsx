"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Chat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const defaultMessage = encodeURIComponent(
      "Hello, I’m interested in your curtain and upholstery services. Can you provide more details about the products and customization options?"
    );
    const whatsappUrl = `https://wa.me/+971561230386?text=${defaultMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    isVisible && (
      <div
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={30} />
      </div>
    )
  );
}
