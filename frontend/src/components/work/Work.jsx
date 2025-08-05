import React from 'react'
import style from './work.module.css'
import common from '../common.module.css'
import Cards from '../cards/cards'

const Work = () => {
  return (
    <div className={`${style.work} container position-relative`}>
        <h1 className={`${common.heading}`}>My Work</h1>
        <div className={common.cards}>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
    </div>
  )
}

export default Work