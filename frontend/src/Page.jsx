import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import style from "./page.module.css";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const Page = () => {

  return (
    <>
      <Hero />
      <About />
      <Work/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default Page;
