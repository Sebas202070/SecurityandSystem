import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles.module.css";
function Navbar() {
  return (
    <nav>
      <div>
        
      </div>
      <div >
        <ul className={styles.nav}>
        <li className={styles.li}>
            <Link href="/">INCIO</Link>
          </li>
          <li>
            <Link href="/About">ACERCA DE MI</Link>
          </li>
          
          <li className={styles.form}>
            <Link  href="/FormularioContacto">FORMULARIO DE CONTACTO</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
