import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    client: "Client A",
    feedback: "This service has changed my life for the better!",
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jane Smith",
    client: "Client B",
    feedback: "I can't believe how easy it was to get started.",
    image: "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Alice Johnson",
    client: "Client C",
    feedback: "Highly recommend to anyone looking for quality!",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto rounded-full mb-4 w-24 h-24 object-cover"
              />
              <p className="text-gray-600 italic mb-2">"{testimonial.feedback}"</p>
              <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};