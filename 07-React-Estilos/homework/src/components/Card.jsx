import React from 'react';
import styles from './Cards.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={styles.card}>
    <div className={styles.header}>
      <div className={styles.cityName}>
        <h4>{props.name}</h4>
      </div>
      <button onClick={props.onClose}>  X  </button>
    </div> 
    <div className={styles.content}>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="image not found"></img>
     <div className={styles.temp}>
      <p>Temp.Máx.</p><p>{props.max}</p>
     </div>
     <div className={styles.temp}>
      <p>Temp.Mín</p><p>{props.min}</p>
     </div>
    </div>
  </div>
  )
};