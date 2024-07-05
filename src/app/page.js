
import styles from "./page.module.css";
import styles1 from "./styles.module.css"
import User from "./Components/User";
import Data from "./Components/data.json"
import Card from "./Components/Card";
import Link from "next/link";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";





export default function Home() {


  return (
    <div>
       <Navbar/>
        <User/>
        <div className={styles1.cardcontainer}>
     {Data.map(e => (
  
      <Card 
      key={e.id}
      nombre = {e.nombre}
      img= {e.img}
      descripcion = {e.descripcion}
      />

     ))}
     </div>
     <hr/>
     <div className={styles1.h2}>
      <h1>Contactame</h1>
      <h1 className={styles1.flecha}>⬇</h1>
     <h2 className={styles1.h2h}> <Link href="/FormularioContacto">Haz Click Aqui</Link></h2>
     
     </div>
     <hr/>
     <div className={styles1.footer}>
     <Footer/>
     </div>
     </div>
     
     
       
  );
}
