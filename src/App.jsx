import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Works from "./components//Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import "./App.css";

function App() {
    return (
        <div className="md:bg-main md:bg-cover w-screen h-screen bg-no-repeat  bg-color-20 font-style3">
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="about-me" element={<AboutMe />}></Route>
                <Route path="works" element={<Works />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Routes>

            <NavbarMobile />
            <Footer />
        </div>
    );
}

export default App;
