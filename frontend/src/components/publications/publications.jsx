import React from 'react'
import style from './publications.module.css'
import common from '../common.module.css'
import Cards from '../cards/cards'

const Publications = () => {
  return (
    <div className={`${style.publications} container position-relative`}>
        <h1 className={`${common.heading}`}>Publications</h1>
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

export default Publications