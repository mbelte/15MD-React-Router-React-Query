import React from "react"
import style from './Card.module.scss'

export type CardSection = {
    title: string,
    text: string
};

const CardSection: React.FunctionComponent<CardSection> = ({title, text}) => {
    
  return (
      <div className={style.section}>
          <span className={style.title}>{title}:</span>
          <span className={style.value}>
              {text}
          </span>
      </div>
  );
};

export default CardSection;
