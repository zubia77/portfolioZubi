import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./NavbarMobile.css";

function NavbarMobile() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="text-color-10 p-4 md:hidden">
            <div className="relative text-4xl flex items-center justify-start overflow-hidden group-focus:ring-4 ring-opacity-30 duration-300  md:hidden">
                {showNav ? (
                    <FiX onClick={() => setShowNav(!showNav)} className="" />
                ) : (
                    <FiMenu onClick={() => setShowNav(!showNav)} className="" />
                )}

                <div
                    className={
                        (showNav ? "right-10" : "right-full") +
                        " bg-color-10/25 fixed left-0 top-12 bottom-40 z-40 text-color-20 text-center text-2xl rounded-br-full rounded-tr-full backdrop-blur-xl  duration-1000 "
                    }
                    onClick={() => setShowNav(!showNav)}
                >
                    <nav className={
                        (showNav ? "opacity-100" : "opacity-0") +
                        " w-9/12 h-96 mt-40 ml-10 grid grid-cols-4 grid-rows-4 gap-7 transition ease-in-out duration-1000"}>
                        <NavLink
                            to="/home"
                            className="w-48 col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center"
                        >
                            
                                <img
                                    src="../../../images/home.png"
                                    alt="image"
                                    className="absolute w-48"
                                />
                                <div className="mt-40">
                                Home
                            </div>
                        </NavLink>
                        <NavLink
                            to="/about-me"
                            className="w-48 col-start-3 col-end-4 row-start-1 row-end-2 flex justify-center"
                        >
                            {" "}
                            <img
                                src="../../../images/meinAvatar.png"
                                alt="image"
                                className="absolute w-36"
                            />
                            <div className="absolute mt-40">About Me</div>
                        </NavLink>
                        <NavLink
                            to="/works"
                            className="navlink w-48 col-start-1 col-end-2 row-start-3 row-end-4 flex justify-center"
                        >
                            <img
                                src="../../../images/working.png"
                                alt="image"
                                className="absolute w-36"
                            />
                            <div className="absolute mt-40">My Projects</div>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="w-48 col-start-3 col-end-4 row-start-3 row-end-4 flex justify-center"
                        >
                            {" "}
                            <img
                                src="../../../images/contactMe.png"
                                alt="image"
                                className="absolute  w-36"
                            />
                            <div className="absolute mt-40">Contact Me</div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
