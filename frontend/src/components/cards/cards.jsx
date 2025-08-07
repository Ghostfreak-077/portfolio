import React from 'react'
import style from './card.module.css'
import common from '../common.module.css'
import demo from '../../assets/demo_hacks.png'

const Cards = () => {
  return (
    <div className={style.card}>
      <img src={demo} className={style.bg_img} alt="" />
      <div className={style.card_content}>
        <h2 className={style.title}>Detecting anomaly in real time AIS data of ships</h2>
        <p className={style.description} >
          This is a brief description of the card content. It provides an overview of what the card is about.
        </p>
        {/* <button className={common.button}>Learn More</button> */}
      </div>
    </div>
  )
}

export default Cards