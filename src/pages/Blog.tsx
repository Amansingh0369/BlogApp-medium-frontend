import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import  Button  from "../components/ui/button";
import axios from "axios";

interface Post {
    id: string;
    author: {
        name: string;
    };
    title: string;
    content: string;
}

const Blog: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [reversedPost, setReversedPost] = useState<Post[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    "https://blogapp-medium-backend.onrender.com/api/v1/post/bulk"
                );
                setPosts(response.data.posts); // Assuming response.data.posts contains the posts array
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        setReversedPost([...posts].reverse());
    }, [posts]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-lg font-medium text-gray-700">Loading posts...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-screen mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between border items-center">
                    <a href="/">
                        <h1 className="text-2xl font-bold text-green-600">MiniBlog</h1>
                    </a>

                    {/* On small screens, show profile avatar that toggles dropdown */}
                    <div className="sm:hidden relative">
                        <div
                            className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-green-100 rounded-full dark:bg-gray-600 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                        <span className="font-medium text-gray-600 dark:text-gray-300 text-lg">
                            {/*{posts.map((post)=>post.author.name[0].toUpperCase())}*/}
                            A
                        </span>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
                                <nav className="flex flex-col p-2">
                                    <Link to="/blog" className="text-gray-600 hover:text-gray-900 py-2 px-4">Home</Link>
                                    <Link to="/write" className="text-gray-600 hover:text-gray-900 py-2 px-4">Write</Link>
                                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 py-2 px-4">
                                        <Link to="/">Sign Out</Link>
                                    </Button>
                                </nav>
                            </div>
                        )}
                    </div>

                    {/* Regular Nav Menu (for large screens) */}
                    <nav className="hidden sm:flex space-x-4 items-center">
                        <Link to="/blog" className="text-gray-600 hover:text-gray-900 ">Home</Link>
                        <Link to="/write" className="text-gray-600 hover:text-gray-900">Write</Link>
                        <div
                            className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-green-100 rounded-full dark:bg-gray-600 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                        <span className="font-medium text-gray-600  dark:text-gray-300 text-lg">
                            {/*{posts.map((post)=>post.author.name[0].toUpperCase())}*/}
                            A
                        </span>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extralight mb-8 text-gray-900">Latest Posts</h2>
                <div className="space-y-8">
                    {reversedPost.map((post) => (
                        <Link to={`/read`} className="">
                        <article key={post.id} className="flex flex-col sm:flex-row bg-white p-5 items-start space-y-6 sm:space-y-0 sm:space-x-8 pb-8 border-b border-gray-200">
                            <div className="sm:w-2/3">
                                <div className="flex items-center text-sm text-gray-500 space-x-3 mb-4">
                                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-green-50 rounded-full dark:bg-gray-600">
                                        <span className="font-medium text-gray-600 dark:text-gray-300 text-lg">{post.author.name[0].toUpperCase()}</span>
                                    </div>
                                    <span className="font-semibold text-gray-900 dark:text-gray-200">{post.author.name.toUpperCase()}</span>
                                    <div className="flex space-x-2 text-gray-400">
                                        <span className="font-bold ">·</span>
                                        <span>1, May</span>
                                        <span>·</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-500 transition-all mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base mb-4">{post.content}</p>
                                <span className="font-extralight text-gray-400">{Math.ceil(post.content.length/100)} min read</span>
                            </div>
                        </article>
                        </Link>

                    ))}
                </div>
            </main>
        </div>
    );
};

export default Blog;

