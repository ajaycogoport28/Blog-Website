import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Blogs from "./Blogs/index.js";

function HomePage()
{
  
    return(
        <>
            <Navbar/>
            <div className="top-container"></div>
            <Blogs></Blogs>
        </>
    );
}

export default HomePage;