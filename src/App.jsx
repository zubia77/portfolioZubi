import { Routes, Route, NavLink } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Works from "./components//Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="md:bg-main md:bg-cover h-screen bg-no-repeat bg-color-20 font-style3">
            <div className="flex justify-end items-center">
                <Home />
                <img
                    src="../images/zubiRemovebg.png"
                    alt=""
                    className="w-11/12 md:hidden"
                />
            </div>
            <Navbar />
            <Footer />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about-me" element={<AboutMe />}></Route>
                <Route path="works" element={<Works />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
