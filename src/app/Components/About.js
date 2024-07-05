import React from 'react'
import style from "../styles.module.css"



function About() {

    const about = "Hola!!👋 Me llamo Sebastián, soy de Posadas, Misiones y Lic, en administración de empresas, pero las vueltas de la vida me llevaron a estudiar programación, y con mucho esfuerzo y dedicación me gradué recientemente como Desarrollador Full Stack en Henry, donde recibí mi mayor aprendizaje en las nuevas tecnologías (librerías y frameworks) con mas de 700 horas de código en Javascript. Ademas cuento con un excelente Ingles y experiencia trabajando en equipo. Tengo muchísimas ganas de poder trabajar, desarrollarme y sumar como programador en el lugar o la empresa que me permita aplicar todo lo aprendido y todos mis conocimientos!!."
  return (
    <div className={style.container}>
        <h1 className={style.about}>Acerca de mi</h1>
        <p className={style.p}>{about}</p>
    
    </div>
  )
}

export default About