import React from 'react'
import style from './publications.module.css'
import common from '../common.module.css'
import Cards from '../cards/cards'
import data from '../../assets/info.json'

const Publications = () => {
  return (
    <div className={`${style.publications} container position-relative`}>
        <h1 className={`${common.heading}`}>Publications</h1>
        <div className={common.cards}>
          {/* {} */}
        </div>
    </div>
  )
}

export default Publications