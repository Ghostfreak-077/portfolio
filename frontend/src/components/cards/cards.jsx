import React from "react";
import style from "./card.module.css";
import common from "../common.module.css";
import demo from "../../assets/demo_hacks.png";
import { TbExternalLink } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Cards = ({ data }) => {

  const linksMap = {
    "github": <IoLogoGithub />,
    "website": <TbExternalLink />,
    "link": <TbExternalLink />
  }

  return (
    <div className={style.card}>
      <img src={data?.bg} className={style.bg_img} alt="" />
      <div className={style.enclose}>
        <div className={style.card_content}>
          {data.tags.length != 0?<button className={style.ongoing}>{data.tags[0]}</button>:''}
          
          <h2 className={style.title}>{data?.name}</h2>
          <p className={style.description}>{data?.description}</p>
          <ul className={style.links}>
            {data?.links?.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={style.link} target="_blank" rel="noopener noreferrer">
                  {linksMap[link.name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <button className={common.button}>Learn More</button> */}
      </div>
    </div>
  );
};

export default Cards;
