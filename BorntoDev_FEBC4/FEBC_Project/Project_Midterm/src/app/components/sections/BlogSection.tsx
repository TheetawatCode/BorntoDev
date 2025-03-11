import React from 'react';

const blogPosts = [
  {
    title: 'Post One',
    description: 'This is a short description for post one.',
    imageUrl: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    title: 'Post Two',
    description: 'This is a short description for post two.',
    imageUrl: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  },
  {
    title: 'Post Three',
    description: 'This is a short description for post three.',
    imageUrl: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#'
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a href={post.link} className="text-blue-500 hover:text-blue-700">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};