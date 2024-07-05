

import React from "react";
import Link from "next/link";

import styles from "../styles.module.css";
function NavbarFormulario() {
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
          
          
        </ul>
      </div>
    </nav>
  );
}

export default NavbarFormulario;
