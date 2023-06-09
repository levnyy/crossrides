import styles from "./Navigation.module.css"
import Link from "next/link";
export default function Navigation(){
    return(
        <div className={styles.nav}>
                <nav className={styles.nav}>
                    <div className={styles.ul}>
                         <Link href="/Items/Legends" className={styles.nav}>Legends</Link>
                         <Link href="/Items/Weapons" className={styles.nav}>Weapons</Link>
                         <Link href="/Items/Maps" className={styles.nav}>Maps</Link>
                         <Link href="/" className={styles.nav}>Home</Link>
                            <Link href="/Login" className={styles.nav}>Login</Link>
                        <Link href="/AboutUs" className={styles.nav}>About Us</Link>
                        <div className={styles.li}>
                            <Link href="/" className={styles.w}>Create</Link>
                            <ul className={styles.ul}>
                                <li><Link href="/Items/Legends/Create" className={styles.nav}>Legend</Link></li>
                                <li><Link href="/Items/Maps/Create" className={styles.nav}>Map</Link></li>
                                <li><Link href="/Items/Weapons/Create" className={styles.nav}>Weapon</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
