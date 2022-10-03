import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="text-4xl  hidden md:block text-color-10">
            <nav className="p-4" id="oben">
                <NavLink to="/home" className="px-8">
                   Home
                </NavLink>
                <NavLink to="/about-me" className="px-8">
                    About Me
                </NavLink>

                <NavLink to="/works" className="px-8">
                    Works
                </NavLink>
                <NavLink to="/contact" className="px-8">
                    Contact
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
