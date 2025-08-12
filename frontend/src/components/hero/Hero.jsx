import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./hero.module.css";
import character from "../../assets/chara3.png";
import box1 from "../../assets/yellow_mid.png";
import box2 from "../../assets/large_yellow.png";
import box3 from "../../assets/small_yellow.png";
import box4 from "../../assets/cube.png";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  const [nav, setNav] = useState();

  useEffect(()=>{
      const transition = document.getElementById('transition')
      const box1 = document.getElementById('box1')
      const box2 = document.getElementById('box2')
      const box3 = document.getElementById('box3')
      const box4 = document.getElementById('box4')
      const eye_cover = document.getElementById('eye_cover')

      const rem_size = (window.innerWidth/parseInt(getComputedStyle(document.documentElement).fontSize.slice(0,2)))

      window.addEventListener('scroll',()=>{

        setNav(window.scrollY)
        // transition.style.transform = `scale(${(window.scrollY/screen.height)*rem_size*2})`

        if(window.scrollY > 0){
          eye_cover.style.height = '0'
        }
        else{
          eye_cover.style.height = '2rem'
        }
        
        box1.style.transform = `translateX(-${(window.scrollY/screen.height)*rem_size*0.6}px) translateY(-${(window.scrollY/screen.height)*rem_size*0.9}px) rotateZ(-${(window.scrollY/screen.height)*360*0.07}deg) `
        box2.style.transform = `translateX(${(window.scrollY/screen.height)*rem_size*0.8}px) translateY(-${(window.scrollY/screen.height)*rem_size*0.9}px) rotateZ(${(window.scrollY/screen.height)*360*0.1}deg) `
        box3.style.transform = `translateX(-${(window.scrollY/screen.height)*rem_size*1.4}px) translateY(${(window.scrollY/screen.height)*rem_size*0.9}px) rotateZ(-${(window.scrollY/screen.height)*360*0.1}deg) `
        box4.style.transform = `translateX(${(window.scrollY/screen.height)*rem_size*1.2}px) translateY(${(window.scrollY/screen.height)*rem_size*0.9}px) rotateZ(-${(window.scrollY/screen.height)*360*0.1}deg) `

      })

    // console.log();
  },[])

  return (
    <>
      {/* <div className={style.chat}>
        <IoChatboxEllipses />
      </div> */}
      <div className={style.hero}>
        <Navbar nav={nav} setNav={setNav} />

        <div className={style.parallax}></div>

        <div className={style.scroll_anim}>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          {/* <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span>
          <span>
            <FaAngleDown />
          </span> */}
        </div>

        <div className={style.bg_text}>GHOSTFREAK</div>

        <div className={`${style.container} container`}>
          <img className={style.sq} src={box1} id="box1" />
          <img className={style.sq} src={box2} id="box2" />
          <img className={style.sq} src={box3} id="box3" />
          <img className={style.sq} src={box4} id="box4" />

          <div className={style.character}>
            <div className={style.eye_cover} id="eye_cover"></div>
            <img src={character} alt="" className={style.img} />
            {/* <div className={style.transition} id="transition"></div> */}
          </div>

          <div className={style.enclose}>
            <div className={style.left_text}>
              <div className={style.heading}>
                <p>THE QUEST OF A</p>
                <p>YOUNG PROGRAMMER IN THE</p>
                <p>WORLD OF BYTES</p>
              </div>
              <div className={style.sub_heading}>
                Welcome to the hub of a programmer who'd love to brainstorm over
                <br />a cup of coffee or discuss your project over a late-night
                coding <br />
                session
              </div>
            </div>

            <div className={style.right_text}>
              In many cases, how a program looks is the most <br /> important
              part for a commercial company, how the <br />
              programs works seems to be secondary
              <div className={style.torvalds}>~ Linus Torvalds</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
