import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import Blog from "./pages/Blog.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
