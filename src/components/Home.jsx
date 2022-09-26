import React from 'react'
import "../App.css"

function Home() {
  return (
    <div className="flex justify-end justify-evenly items-center md:justify-start">
    <div className="text-color-10 md:mx-20 md:my-80 mt-20 ">
    <h2 className="greeting text-center pb-8 md:text-5xl">Hi I'm</h2>
    <h1 className="name text-center pb-8 text-3xl md:text-7xl">Zubia Rashid</h1>
    <h3 className="profession text-center md:text-5xl">Full Stack Developer</h3>
</div>

<img
    src="../images/zubia.png"
    alt=""
    className="w-6/12 rounded-full md:hidden "
/>
</div> 
  )
}

export default Home