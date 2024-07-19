import React from 'react'
import { COLORS,SPACING } from './constants'
import styles from "./card.module.css";


type CardProps = {
    title:string;
    content:string;
}

const Example:React.FC<CardProps> = ({title,content}) => {
  return (
    <div>
      <h2>{title} </h2>
      <p>{content}</p>
    </div>
  )
}

export default Example
