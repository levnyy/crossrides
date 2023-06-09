import styles from "./Navigation.module.css"
import Link from "next/link";
export default function Navigation(){
    return(
        <div className={styles.nav}>
                <nav className={styles.nav}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropbutton}>Menu</button>
                        <div className={styles.list}>
                            <a href="/" className={styles.nav}>Home </a>
                            <a href="/buchungen" className={styles.nav}>Buchungen </a>
                            <a href="/service" className={styles.nav}>Service </a>
                        </div>
                    </div>        
                </nav>
        </div>
    )
}
