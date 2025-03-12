// Blog.tsx
import React from 'react';
import BlogList from '../components/common/BlogList';

const Blog: React.FC = () => (
  <div>
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <BlogList />
    </main>
  </div>
);

export default Blog;