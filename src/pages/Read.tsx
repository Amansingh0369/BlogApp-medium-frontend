import React, { useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import  Button  from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
// import axios from "axios";

// This is a mock blog post. In a real application, you would fetch this data from an API.
const blogPost = {
    id: 1,
    title: "The Art of Sustainable Gardening",
    author: "Jane Green",
    date: "May 15, 2023",
    content: `
    Sustainable gardening is not just a trend; it's a way of life that promotes harmony between humans and nature. By adopting sustainable gardening practices, we can create beautiful, thriving gardens that support local ecosystems and reduce our environmental impact.

    One of the key principles of sustainable gardening is water conservation. This can be achieved through various methods such as:

    1. Installing a rainwater harvesting system
    2. Using drought-resistant plants
    3. Implementing efficient irrigation techniques like drip irrigation

    Another important aspect is soil health. Healthy soil is the foundation of a sustainable garden. You can improve your soil by:

    - Composting kitchen and garden waste
    - Avoiding chemical fertilizers and pesticides
    - Practicing crop rotation to prevent soil depletion

    Biodiversity is also crucial in sustainable gardening. By planting a variety of native species, you create a habitat that supports local wildlife, including beneficial insects and birds.

    Remember, sustainable gardening is a journey, not a destination. Start small, learn from your experiences, and gradually expand your sustainable practices. Your garden - and the planet - will thank you for it!
  `
};

const Read: React.FC = () => {
    const  id  = useParams<{ id: string }>();
    const [loading, setLoading] = React.useState(false);
    const [post,setPost] = useState();

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://blogapp-medium-backend.onrender.com/api/v1/blog/${id}`
    //             );
    //             setPost(response.data); // Assuming response.data.posts contains the posts array
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    //         } finally {
    //             setLoading(false); // Stop loading
    //         }
    //     };
    // }, []);

    // For now, we'll just use our mock data

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-lg font-medium text-gray-700">Loading posts...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Card className="max-w-4xl mx-auto bg-white shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-green-800">{blogPost.title}</CardTitle>
                        <p className="text-center text-green-600">By {blogPost.author} | {blogPost.date}</p>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-green max-w-none">
                            {blogPost.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4 text-green-900">{paragraph}</p>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
                            <Link to="/blog">Back to Blog</Link>
                        </Button>
                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                            <Link to="/write">Write a Post</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default Read;
