import React from 'react'
import style from './work.module.css'
import common from '../common.module.css'
import Cards from '../cards/cards'
import WorkCard from './workCard'
import data from '../../assets/info.json'

const Work = () => {
  return (
    <div className={`${style.work} container position-relative`} id='experience'>
        <h1 className={`${common.heading}`}>Experience and Education</h1>
        <div className={style.cards}>
          {data.experience.map((exp => (
            <WorkCard key={exp.id} data={exp} />
          )))}
          {/* <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard /> */}
        </div>
    </div>
  )
}

export default Work