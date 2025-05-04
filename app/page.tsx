// import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Features from '@/components/Features';

async function getData() {
  const res = await fetch('https://inotch-backend.onrender.com/api/tesla');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const { 'hero-slides': heroSlides, 'car-models': carModels, features } = data.data.data;

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero slides={heroSlides || []} />
        <Models models={carModels || []} />
        <Features features={features || []} />
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2025 Tesla Replica. All rights reserved.
        </div>
      </footer>
    </>
  );
}
