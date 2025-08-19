import React from "react";
import { useEffect, useState } from "react";
import style from "./navbar.module.css";

const Navbar = ({nav, setNav}) => {

  const [aboutHeight, setAboutHeight] = useState(null);
  const [workHeight, setWorkHeight] = useState(null);
  const [projectsHeight, setProjectsHeight] = useState(null);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    setAboutHeight(document.getElementById('about'))
    setWorkHeight(document.getElementById('experience'))
    setProjectsHeight(document.getElementById('projects'))
    
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY);
    });
  }, [])
  

  const scrolling = (ele)=>{
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(ele.offsetTop);
    
    setNav(ele.offsetTop);
  }

  return (
    <b>
      <div className={style.nav} id="navbar">
        <ul className={style.menu}>
          <li className={nav >= screen.height && nav <= screen.height*2 ?style.select:''} onClick={(e)=>{scrolling(aboutHeight)}} >About</li>
          <li className={nav >= screen.height*2 && nav <= screen.height*3 ?style.select:''} onClick={()=>{scrolling(workHeight)}} >Experience</li>
          <li className={nav >= screen.height*3 && nav <= screen.height*4 ?style.select:''} onClick={()=>{scrolling(projectsHeight)}}>Projects</li>
        </ul>
      </div>
    </b>
  );
};

export default Navbar;
