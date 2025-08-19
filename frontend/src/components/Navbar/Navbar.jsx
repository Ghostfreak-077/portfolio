import React from "react";
import { useEffect } from "react";
import style from "./navbar.module.css";

const Navbar = ({nav, setNav}) => {
  const aboutHeight = document.getElementById('about')?.scrollTop || 0;
  const workHeight = document.getElementById('experience')?.offsetHeight || 0;
  const projectsHeight = document.getElementById('projects')?.offsetHeight || 0

  useEffect(() => {
    const aboutHeight = document.getElementById('about').scrollTop;
    const workHeight = document.getElementById('experience').scrollTop;
    const projectsHeight = document.getElementById('projects').scrollTop;
  }, [])
  

  const scrolling = (ht)=>{
    window.scrollTo(0, ht)
  }

  return (
    <b>
      <div className={style.nav}>
        <ul className={style.menu}>
          <li className={nav >= screen.height && nav <= screen.height*2 ?style.select:''} onClick={()=>{scrolling(aboutHeight)}} >About</li>
          <li className={nav >= screen.height*2 && nav <= screen.height*3 ?style.select:''} onClick={()=>{scrolling(workHeight)}} >Experience</li>
          <li className={nav >= screen.height*3 && nav <= screen.height*4 ?style.select:''} onClick={()=>{scrolling(projectsHeight)}}>Projects</li>
          {/* <li className={nav >= screen.height*4 && nav <= screen.height*5 ?style.select:''} onClick={()=>{scrolling(4)}}>Publications</li> */}
        </ul>
      </div>
    </b>
  );
};

export default Navbar;
