import React from "react";
// import "./NavbarMobile.css";

function NavbarMobile() {
    return (
        <div className="flex justify-center">
            {" "}
            <div className="navbar m-20 grid justify-evenly grid-cols-2 grid-rows-2 gap-2 ">
                <div className="navlink relative h-40 ">
                    <img
                        src="../../../images/home.png"
                        alt="image"
                        className="front absolute w-48 col-start-1 col-end-3 row-start-1 row-end-2 hover:opacity-0"
                    />
                    <div className="back absolute bg-color-20 text-color-10 text-3xl w-48 h-40 col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center opacity-0 hover:border-8 hover:border-color-10 hover:opacity-100 hover:rounded-3xl ">
                        Home
                    </div>
                </div>
                <div className="navlink relative ">
                    {" "}
                    <img
                        src="../../../images/meinAvatar.png"
                        alt="image"
                        className="front absolute w-36 ml-6 mb-3 col-start-3 col-end-5 row-start-1 row-end-2 hover:opacity-0"
                    />
                    <div className="back absolute bg-color-20 text-color-10 text-3xl w-48 h-40 col-start-3 col-end-5 row-start-1 row-end-2 row-end-2 flex justify-center items-center opacity-0 hover:border-8 hover:border-color-10 hover:opacity-100 hover:rounded-3xl ">
                        About Me
                    </div>
                </div>
                <div className="navlink relative">
                    <img
                        src="../../../images/working.png"
                        alt="image"
                        className="front ml-6 absolute w-36 col-start-1 col-end-3 row-start-2 row-end-4 hover:opacity-0"
                    />
                    <div className="back absolute bg-color-20 text-color-10 text-3xl w-48 h-40 col-start-1 col-end-3 row-start-2 row-end-4 flex justify-center items-center opacity-0 hover:border-8 hover:border-color-10 hover:opacity-100 hover:rounded-3xl text-center ">
                        My Projects
                    </div>
                </div>
                <div className="navlink relative">
                    {" "}
                    <img
                        src="../../../images/contact.png"
                        alt="image"
                        className="front absolute ml-6 w-36 col-start-3 col-end-5 row-start-2 row-end-4 hover:opacity-0"
                    />
                    <div className="back absolute bg-color-20 text-color-10 text-3xl w-48 h-40 col-start-3 col-end-5 row-start-2 row-end-4 flex justify-center items-center opacity-0 hover:border-8 hover:border-color-10 hover:opacity-100 hover:rounded-3xl text-center ">
                        Contact Me
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
