import styles from './Home.module.css'
export default function Home() {

    return (
        <div className={styles.body}>
            <div className={styles.schifffahrten}>
                <h1 className={styles.titel1}>Schifffahrten</h1>
                <a href='/buchungen'>
                    <img src="ship.png" className={styles.imageship}/>
                </a>
            </div>
            <div className={styles.buchen}>
                <h1 className={styles.titel2}>Service</h1>
                <a href="/service">
                    <img src="services.png" className={styles.imageservice}/>
                </a>
            </div>

        </div>
    )
}

