import React from "react";
import style from "./navbar.module.css";

const Navbar = ({nav, setNav}) => {
  return (
    <b>
      <div className={style.nav}>
        <ul className={style.menu}>
          <li className={nav === 'about'?style.select:''} onClick={()=>{setNav('about')}} >About</li>
          <li className={nav === 'work'?style.select:''} onClick={()=>{setNav('work')}} >My Work</li>
          <li className={nav === 'projects'?style.select:''} onClick={()=>{setNav('projects')}} >Projects</li>
          <li className={nav === 'blogs'?style.select:''} onClick={()=>{setNav(nav)}} >Blogs</li>
        </ul>
      </div>
    </b>
  );
};

export default Navbar;
