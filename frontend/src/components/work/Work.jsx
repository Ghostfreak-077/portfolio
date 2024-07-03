import React from 'react'
import style from './work.module.css'
import common from '../common.module.css'

const Work = () => {
  return (
    <div className={`${style.work} container position-relative`}>
        <h1 className={`${common.heading}`}>My Work</h1>
    </div>
  )
}

export default Work