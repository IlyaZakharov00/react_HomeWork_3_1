import {FC} from 'react'
import { Star } from '../star/star'
import { TStars } from "../types/TStars"
import styles from "./stars.module.css"


export const Stars: FC<TStars> = (proops) => {

  const {count} = proops
  const createId = () => Math.random().toString(36).slice(2) 

  if(count < 1 || count > 5)  return (<>Кажется, введенное значение звёзд не валидно!</>)
  let arrFromCount = Array.from({length: count})  

  return (
    <ul className = {styles['stars-container']}>
      {arrFromCount.map(() => <Star  key={createId()}/>)}
    </ul>
  )
}