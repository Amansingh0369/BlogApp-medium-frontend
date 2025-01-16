import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from "../components/ui/button";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-4 sm:p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Welcome to GreenBlog
                </h1>
                <p className="text-xl sm:text-2xl mb-12 text-green-800 max-w-2xl mx-auto">
                    Cultivate your thoughts, grow your ideas, and plant the seeds of
                    inspiration
                </p>
                <div className="space-x-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                        <Link to="/signup">Get Started</Link>
                    </Button>
                    <Button className="text-green-600 border-green-600 hover:bg-green-100 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                        <Link to="/login">Sign In</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
