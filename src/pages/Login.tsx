import React from 'react';
import { Link } from 'react-router-dom';
import  Button  from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { motion } from "framer-motion";

const Login: React.FC = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");




    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col md:flex-row items-center justify-center p-4 sm:p-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md mb-8 md:mb-0 md:mr-8"
            >
                <blockquote className="text-3xl font-serif italic text-green-800 mb-4">
                    "In nature, nothing is perfect and everything is perfect."
                </blockquote>
                <p className="text-green-600 text-xl">— Alice Walker</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card className="w-full max-w-md bg-white shadow-2xl rounded-full">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-green-800">Sign In</CardTitle>
                        <CardDescription className="text-center text-green-600">Welcome back! Enter your details to access your garden of thoughts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-green-700">Email</label>
                            <Input id="email" type="email"
                                //    onChange={(e)=>{
                                // setEmail(e.target.value);
                            {/*}} */}
                                   placeholder="Enter your email" className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-green-700">Password</label>
                            <Input id="password" type="password"
                                //    onChange={(e)=>{
                                // setPassword(e.target.value);
                            {/*}} */}
                                   placeholder="Enter your password" className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-green-600" />
                                <span className="ml-2 text-sm text-green-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-green-800 hover:underline">Forgot password?</a>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-300">Sign In</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-center text-sm text-green-600 w-full">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-green-800 hover:underline font-medium">
                                Sign Up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default Login;

