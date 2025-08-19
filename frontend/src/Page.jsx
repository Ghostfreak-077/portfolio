import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import style from "./page.module.css";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Publications from "./components/publications/publications";
import { CiWarning } from "react-icons/ci";

const Page = () => {

  const text = "This website is in ALPHA stage — features may break";

  return (
    <>
      <Hero />
      <div class={style.banner}>
        <div class={style.banner_text}>
          <span> <CiWarning /> {text} <CiWarning /> </span>
          <span>{text} <CiWarning /> </span>
        </div>
      </div>
      <About />
      <Work/>
      <Projects/>
      {/* <Publications/> */}
      <Footer/>
    </>
  );
};

export default Page;
