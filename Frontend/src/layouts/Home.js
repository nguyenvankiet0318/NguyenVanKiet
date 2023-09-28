import React from "react";
import Slider from "../pages/Slider";
import Banner from "../pages/Banner";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Instagram from "../pages/Instagram";
import Blog from "../pages/Blog";
function Home() {
    return(
        <>
        <Slider/>
        <Banner/>
        <Product/>
        <Category/>
        <Instagram/>
        <Blog/>
        </>
    )
}
export default Home;