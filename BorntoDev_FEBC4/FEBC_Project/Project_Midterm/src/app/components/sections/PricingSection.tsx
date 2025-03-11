import React from 'react';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$19',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    buttonText: 'Contact Us',
    buttonLink: '#'
  },
  {
    title: 'Pro',
    price: '$49',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    buttonText: 'Contact Us',
    buttonLink: '#'
  },
  {
    title: 'Enterprise',
    price: '$99',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    buttonText: 'Contact Us',
    buttonLink: '#'
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="p-8 border-b">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{plan.title}</h3>
                <div className="text-5xl font-bold mb-4 text-blue-500">{plan.price}</div>
              </div>
              <div className="p-8">
                <ul className="mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={plan.buttonLink} className="block text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};