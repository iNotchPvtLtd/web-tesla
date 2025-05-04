'use client';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const defaultIcons = {
  'Autopilot': 'fa-robot text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300',
  'Long Range': 'fa-road text-green-500 hover:text-green-600 transform hover:scale-110 transition-all duration-300',
  'Supercharging': 'fa-bolt text-red-500 hover:text-red-600 transform hover:scale-110 transition-all duration-300'
};

export default function Features({ features }: { features: Feature[] }) {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <i className={`fas ${defaultIcons[feature.title as keyof typeof defaultIcons] || `fa-star text-yellow-500 hover:text-yellow-600 transform hover:scale-110 transition-all duration-300`} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}