import styles from './Home.module.css'
export default function Home() {

    return (
        <div className={styles.body}>
            <div className={styles.schifffahrten}>
                <a href='/buchungen'>
                    <img src="ship.png" className={styles.imageship}/>
                </a>
            </div>
            <div className={styles.buchen}>
                <a href="/service">
                    <img src="services.png" className={styles.imageservice}/>
                </a>
            </div>

        </div>
    )
}

