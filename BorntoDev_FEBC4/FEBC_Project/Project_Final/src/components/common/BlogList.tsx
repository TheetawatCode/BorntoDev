// BlogList.tsx
import React from 'react';
import BlogCard from './BlogCard';
import blogPosts from '../../data/blogPosts.json';

const BlogList: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogPosts.map((post, index) => (
      <BlogCard key={index} {...post} />
    ))}
  </div>
);

export default BlogList;