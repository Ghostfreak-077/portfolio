import React from 'react'
import style from './projects.module.css'
import common from '../common.module.css'
import Cards from '../cards/cards'
import data from '../../assets/info.json'

const Projects = () => {
  return (
    <div className={`${style.projects} container`} id='projects'>
        <h1 className={common.heading}>Projects</h1>
        <div className={common.cards}>
          {data.projects.map((project) => (
            <Cards key={project.id} data={project} />
          ))}
        </div>
    </div>
  )
}

export default Projects