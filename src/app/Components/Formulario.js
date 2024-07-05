"use client"

import React from 'react'
import styles from "../styles.module.css"
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function Formulario() {
const {register, handleSubmit,reset, formState: {errors}} = useForm()

const submit = () => {
    Swal.fire({

        text: "Mensaje Enviado",
        icon: "success",
      
      })
      reset()
     
}


  return (
    <div>
        <div className={styles.container}>
        <h1 className={styles.h1formu}>Formulario de Contacto</h1>
        
        <form  onSubmit={handleSubmit(submit)} className={styles.inputcontainer}>
            <label htmlFor='nombre'>Nombre</label>
        <input placeholder='Escribe tu nombre aqui..' className={styles.input} type='text' 
       
        {...register("nombre",{required:true,})}
       
        />
        { errors.nombre?.type === "required" &&  <span className={styles.errors}>Nombre es requerido</span>}
        <label htmlFor='correo'>Correo</label>
        <input placeholder='Escribe tu correo aqui..' className={styles.input} type='text'
        {...register("correo", {required:true, pattern: {value:/^\w+@\w+\.[a-zA-Z]{2,}$/}})}
        />
         { errors.correo?.type === "pattern" &&  <span className={styles.errors}>El correo es invalido</span>}
         { errors.correo?.type === "required" &&  <span className={styles.errors}>El correo es requerido</span>}
        
        <label htmlFor='mensaje'>Mensaje</label>
        <textarea placeholder='Deja tu mensaje aqui..' className={styles.textarea}
          {...register("mensaje", {required:true, maxLength:100})}  /> 
          { errors.mensaje?.type === "maxLength" &&  <span className={styles.errors}>Maximo caracteres 700</span>}
          { errors.mensaje?.type === "required" &&  <span className={styles.errors}>El mensaje es requerido</span>}
        <div className={styles.buttoncontainer}>
         <button className={styles.button} type='submit'>Enviar</button>
         </div>  
        </form>
        </div>
    </div>
  )
}

export default Formulario