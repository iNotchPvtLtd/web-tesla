'use client';

interface CarModel {
  name: string;
  description: string;
  price: string;
  image: {
    url: string;
  };
}

export default function Models({ models }: { models: CarModel[] }) {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={model.image.url}
                alt={model.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{model.name}</h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <p className="text-lg font-bold text-gray-900">{model.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}