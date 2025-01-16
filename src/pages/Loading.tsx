import React from 'react';
import { motion } from "framer-motion";

const Loading: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-4 sm:p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    GreenBlog
                </h1>
                <div className="mb-8">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                        }}
                        className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full mx-auto"
                    />
                </div>
                <blockquote className="text-xl sm:text-2xl italic text-green-800 max-w-2xl mx-auto mb-4">
                    "The first draft is just you telling yourself the story."
                </blockquote>
                <p className="text-green-600 text-lg">— Terry Pratchett</p>
            </motion.div>
        </div>
    );
};

export default Loading;

