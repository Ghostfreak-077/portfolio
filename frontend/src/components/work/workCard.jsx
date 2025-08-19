import style from './workCard.module.css';
import {marked} from 'marked';
import parse from 'html-react-parser';

const WorkCard = ({data}) => {  
  
  return (
    <div className={style.card}>
        <div className={style.topRow}>
            <h2 className={style.title}>{data?.company}</h2>
            <h4 className={style.date}>{data?.duration}</h4>
        </div>
        <h4 className={style.subtitle}>{data?.title}</h4>
        <p className={style.description}>
            {parse(marked.parse(data?.description))}
        </p>
    </div>
  )
}

export default WorkCard