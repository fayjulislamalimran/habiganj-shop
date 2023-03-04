import React from "react";
import About from "../About/About.js";
import Chosma from "../Chosma/Chosma.js";
import Company from "../Company/Company.js";
import Glass from "../Glass/Glass.js";
import Hero from "../Hero/Hero.js";
import Blogs from "../Pages/Blogs/Blogs.js";
import Woman from "../Woman/Woman.js";
import Tops from "../Tops/Tops.js";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Tops></Tops>
      <Woman></Woman>
      <Chosma></Chosma>
      <Glass></Glass>
      <Blogs></Blogs>
      <Company></Company>
      <About></About>
    </div>
  );
};

export default Home;
