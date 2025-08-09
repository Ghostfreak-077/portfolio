import React from 'react'
import style from './footer.module.css'
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.row}>
          <div className={style.col}>
            <p className={style.copyright}>© 2025 Partha Pratim Deka. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer