import React from 'react'
import styles from "../styles.module.css"
function Card(props) {
  return (
    
    <div className={styles.card}>
    <img className={styles.imgcard} src={props.img}/>
        <h1 className={styles.h1card}>{props.nombre}</h1>
      
        <p>{props.descripcion}</p>
    </div>
 
   
  )
}

export default Card