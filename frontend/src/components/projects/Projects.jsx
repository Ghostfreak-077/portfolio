import React from 'react'
import style from './projects.module.css'
import common from '../common.module.css'

const Projects = () => {
  return (
    <div className={`${style.projects} container`}>
        <h1 className={common.heading}>Projects</h1>
    </div>
  )
}

export default Projects