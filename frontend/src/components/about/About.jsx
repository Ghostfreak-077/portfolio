import React, { useContext, useEffect, useState } from 'react'
import style from './about.module.css'
import contextVar from '../../ContextFile'
import common from '../common.module.css'
import profile from '../../assets/profile.png'

const About = () => {

  const {server_url, token} = useContext(contextVar)
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quibusdam molestias aliquam cupiditate ullam perferendis fugiat deserunt aliquid debitis, nisi temporibus mollitia ad optio fuga sit voluptatum commodi accusantium officia!')

  useEffect(() => {
    fetch(server_url + '/api/site-data',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setAbout(data.data.attributes.About))
  }, [])

  return (
    <div className={`${style.about} container`}>
        <h1 className={`${common.heading}`}>About Me</h1>
        <div className={`${style.enclose} d-flex`}>
          <p className={style.text}>{about}</p>
          <div className={`${style.img}`}>
            <img src={profile} alt="" />
            <div className={`${style.bg}`}></div>
            <div className={`${style.socials} position-absolute`}>Hello</div>
          </div>
        </div>
    </div>
  )
}

export default About