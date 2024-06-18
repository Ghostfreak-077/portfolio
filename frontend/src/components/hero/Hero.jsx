import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './hero.module.css'
import character from '../../assets/chara.png'

const Hero = () => {

    const [nav, setNav] = useState('home');

  return (
    <div className={style.hero}>
        <Navbar nav={nav} setNav={setNav}/>

        <div className={style.bg_text}>GHOSTFREAK</div>

        <img src={character} alt="" className={style.character} />

    </div>
  )
}

export default Hero