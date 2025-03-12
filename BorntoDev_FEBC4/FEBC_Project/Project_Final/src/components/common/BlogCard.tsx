// BlogCard.tsx
import React from 'react';

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, date, image }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{summary}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  </div>
);

export default BlogCard;