import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import  Button  from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "./Loading.tsx";

const SignUp: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  async  function signup(){
      setLoading(true);
        try {
            const response = await axios.post("https://blogapp-medium-backend.onrender.com/api/v1/user/signup", {
                name: username,
                email: email,
                password: password,
            });

            const jwt = response.data.token; // Ensure token exists in the backend response
            localStorage.setItem("token", jwt); // Store the token in localStorage
            navigate("/blog"); // Redirect to blog page
        }catch (e) {
            alert("Error during signup");
        }
        setLoading(false);
    }

    if(loading){
        return <Loading/>
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col md:flex-row items-center justify-center p-4 sm:p-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md mb-8 md:mb-0 md:mr-8"
            >
                <blockquote className="text-3xl font-serif italic text-green-800 mb-4">
                    "The earth laughs in flowers."
                </blockquote>
                <p className="text-green-600 text-xl">— Ralph Waldo Emerson</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card className="w-[32rem] max-w-md bg-white shadow-2xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-green-800">Sign Up</CardTitle>
                        <CardDescription className="text-center text-green-600">Welcome back! Enter your details to access your garden of thoughts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm font-medium text-green-700">Username</label>
                            <Input id="username" type="text"
                                   onChange={(e)=>{
                                       setUsername(e.target.value);
                                   }}
                                   placeholder="Choose a username" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-green-700">Email</label>
                            <Input id="email" type="email" placeholder="Enter your email"
                                   onChange={(e)=>{
                                       setEmail(e.target.value)
                                   }}
                                   className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-green-700">Password</label>
                            <Input id="password" type="password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                                   placeholder="Create a password" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                        </div>
                        <Button onClick={signup} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-300">Sign Up</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-center text-sm text-green-600 w-full">
                            Already have an account?{' '}
                            <Link to="/login" className="text-green-800 hover:underline font-medium">
                                Sign In
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default SignUp;

