import React, { useContext, useEffect, useState } from 'react'
import style from './about.module.css'
import contextVar from '../../ContextFile'
import common from '../common.module.css'
import profile from '../../assets/profile.png'
import { ImLinkedin } from 'react-icons/im'
import { IoLogoGithub } from 'react-icons/io'
import { FaHashnode } from 'react-icons/fa6'
import { PiReadCvLogoFill } from 'react-icons/pi'

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

  const socials = () => {
    (
              <div className={`${style.socials} position-absolute`}>
                <a href='https://www.linkedin.com/in/partha-pratim-deka-46a406203/' target='_blank' className={style.circles} title='Linkedin'><ImLinkedin/></a>
                <a href='https://github.com/Ghostfreak-077/' target='_blank' className={style.circles} title='Github'><IoLogoGithub/></a>
                <a href='https://hashnode.com/@ghostfreak077' target='_blank' className={style.circles} title='Hashnode'><FaHashnode/></a>
                <a href='http://bit.ly/parthaxntn-mern-resume' title='Resume/CV' target='_blank'  className={style.circles}><PiReadCvLogoFill/></a>
              </div>
    )
  }

  return (
    <div className={`${style.about} container`}>
        <h1 className={`${common.heading}`}>About Me</h1>
        <div className={`${style.enclose} d-flex`}>
          <p className={style.text}>{about}</p>
          <div className={`${style.img}`}>
            <div className={style.img_enclose}>
              <img src={profile} alt="" className={style.jpg} />
              <div className={`${style.bg}`}></div>
              {}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About