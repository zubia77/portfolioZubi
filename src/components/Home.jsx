import React from "react";
import "../App.css";

function Home() {
    return (
        <div className="md:flex">
            <div className="text-color-10 md:mx-32 md:my-60">
                <h2 className="greeting text-center pb-8 text-2xl md:text-5xl">
                    Hi I'm
                </h2>
                <h1 className="name text-center pb-8 text-4xl md:text-7xl">
                    Zubia Rashid
                </h1>
                <h3 className="profession text-center text-base md:text-5xl">
                    Full Stack Developer
                </h3>
            </div>
            <div className=" flex justify-end  mt-10">
                {" "}
                <img
                    src="../images/zubiRemovebg.png"
                    alt=""
                    className="md:hidden"
                />
            </div>
        </div>
    );
}

export default Home;
