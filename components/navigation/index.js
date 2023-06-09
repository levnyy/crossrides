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
                            <a href="/" className={styles.nav}>Test1 </a>
                            <a href="/" className={styles.nav}>Test2 </a>
                        </div>
                    </div>        
                </nav>
        </div>
    )
}
