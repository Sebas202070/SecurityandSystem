
import Image from 'next/image'
import React from 'react'
import styles from "../styles.module.css"

function User() {
 

  return (
    <div className={styles.container}>
   <div className={styles.transition}>
    
    <h1 className={styles.h1name}>SEBASTIAN RODRIGO NAJLE</h1>
    <hr/>
    <h2 className={styles.full}>Full Stack Developer</h2>
    </div>
    <Image className= {styles.img} src="/202.jpg" width={200} height={200} alt="Not Found"/>
    <div className={styles.h1}>
   
    <h1>HOBBIES</h1>
   
   
    </div>
   
    </div>
  )
}

export default User

