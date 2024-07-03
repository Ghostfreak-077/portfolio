import React from "react";
import style from "./navbar.module.css";

const Navbar = ({nav, setNav}) => {

  const scrolling = (rem)=>{
    window.scrollTo(0, screen.height*rem)
  }

  return (
    <b>
      <div className={style.nav}>
        <ul className={style.menu}>
          <li className={nav >= screen.height && nav <= screen.height*2 ?style.select:''} onClick={()=>{scrolling(1.35)}} >About</li>
          <li className={nav >= screen.height*2 && nav <= screen.height*3 ?style.select:''} onClick={()=>{scrolling(2.2)}} >My Work</li>
          <li className={nav >= screen.height*3 && nav <= screen.height*4 ?style.select:''} onClick={()=>{scrolling(1.0*3)}}>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
    </b>
  );
};

export default Navbar;
