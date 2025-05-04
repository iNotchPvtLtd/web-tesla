"use client"
import { useState } from 'react';
import Image from 'next/image';

interface HeroSlide {
  image: { url: string };
  title: string;
  subtitle: string;
}

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="w-full h-full overflow-hidden relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={slide.image.url}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl max-w-xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 flex space-x-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}