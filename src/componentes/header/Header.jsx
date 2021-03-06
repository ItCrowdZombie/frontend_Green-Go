import styles from "./Header.module.css";
import Login from "../buttons/Login";
import Carrito from "../buttons/Carrito";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className={styles.navbar}  >
        <Login/>
        <h1 className={styles.logo}>Green&Go</h1>
        <Carrito/>
    </nav>
  );
}
