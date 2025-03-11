import React from 'react';

const portfolioItems = [
  {
    title: 'Project One',
    description: 'This is a description for project one.',
    imageUrl: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Project Two',
    description: 'This is a description for project two.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661320832191-8e9866f34bc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Project Three',
    description: 'This is a description for project three.',
    imageUrl: 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Project Four',
    description: 'This is a description for project four.',
    imageUrl: 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const PortfolioSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Portfolio</h2>
        <div className="flex flex-wrap -mx-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};