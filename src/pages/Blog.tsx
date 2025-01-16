import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from "../components/ui/button";

const posts = [
    { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React and start building awesome apps.', author: 'John Doe', date: 'May 1, 2023', readTime: '5 min read' },
    { id: 2, title: 'The Power of Tailwind CSS', excerpt: 'Discover how Tailwind CSS can streamline your styling workflow.', author: 'Jane Smith', date: 'May 5, 2023', readTime: '7 min read' },
    { id: 3, title: 'Mastering React Hooks', excerpt: 'Dive deep into React Hooks and level up your component game.', author: 'Bob Johnson', date: 'May 10, 2023', readTime: '10 min read' },
];

const Blog: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-green-600">MiniBlog</h1>
                    <nav className="flex space-x-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                        <Link to="/write" className="text-gray-600 hover:text-gray-900">Write</Link>
                        <Button  variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                            <Link to="/">Sign Out</Link>
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Posts</h2>
                <div className="space-y-8">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pb-8 border-b border-gray-200">
                            <div className="sm:w-2/3">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    <Link to={`/blog/${post.id}`} className="hover:underline">{post.title}</Link>
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.author}</span>
                                    <span className="mx-2">·</span>
                                    <span>{post.date}</span>
                                    <span className="mx-2">·</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                            <div className="sm:w-1/3">
                                <img
                                    src={`https://source.unsplash.com/featured/400x300?blog,${post.id}`}
                                    alt={post.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Blog;

