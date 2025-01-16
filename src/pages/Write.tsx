import React, { useState} from 'react';
import  Button  from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import axios from "axios";

const Write: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    async function write() {
        setLoading(true);
        try {
            const response = await axios.post(
                " https://blogapp-medium-backend.onrender.com/api/v1/blog",
                {
                    title: title,
                    content: content,
                },
                {
                    headers: {
                        authorization: `${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            alert(response.data.msg);
        } catch (e) {
            console.error(e);
            alert("Error during posting blog");
        }
        setLoading(false)
    }



    return (
        <div className="min-h-screen min-w-screen bg-gradient-to-br from-green-50 to-emerald-100 py-0 px-4 sm:px-0">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-screen mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between border items-center">
                    <h1 className="text-2xl font-bold text-green-600">MiniBlog</h1>

                    {/* On small screens, show profile avatar that toggles dropdown */}
                    <div className="sm:hidden relative">
                        <div
                            className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-green-100 rounded-full dark:bg-gray-600 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                        <span className="font-medium text-gray-600 dark:text-gray-300 text-lg">
                            {/*{posts.map((post)=>post.author.name[0].toUpperCase())|| }*/}
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="max-w-4xl mx-auto bg-white shadow-2xl mt-10">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-green-800">Write Your Blog Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div  className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-green-700">
                                    Title
                                </label>
                                <Input
                                    id="title"
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter your blog post title"
                                    className="mt-1 block w-full border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-green-700">
                                    Content
                                </label>
                                <Textarea
                                    id="content"
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Write your blog post content here..."
                                    className="mt-1 block w-full border-green-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
                                    rows={10}
                                />
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
                                    onClick={write}
                                >
                                    {loading ? "Loading..." : "Publish Post"}
                                </Button>

                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-center text-sm text-green-600">
                        Remember to proofread your post before publishing!
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default Write;

