import React from 'react'
import style from './footer.module.css'
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <div className={style.row}>
          <div className={style.col}>
            <h3>About Me</h3>
            <p>I am a full stack developer with a passion for creating beautiful and functional websites.</p>
          </div>
          <div className={style.col}>
            <h3>Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div className={style.col}>
            <h3>Social</h3>
            <ul className={style.socials}>
              <li><a href='https://www.linkedin.com/in/partha-pratim-deka-46a406203/' target='_blank' className={style.circles} title='Linkedin'><ImLinkedin/></a></li>
              <li><a href='https://github.com/Ghostfreak-077/' target='_blank' className={style.circles} title='Github'><IoLogoGithub/></a></li>
              <li><a href='https://hashnode.com/@ghostfreak077' target='_blank' className={style.circles} title='Hashnode'><FaHashnode/></a></li>
            </ul>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <p className={style.copyright}>© 2025 Partha Pratim Deka. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer