import styles from './Home.module.css'
export default function Home() {

    return (
        <div>
            <img src="crossrides.png" className={styles.crossrides}/>
            <h3 className={styles.title}>Schiffahrten</h3>
            <h3 className={styles.title}>Buchen</h3>
        </div>
    )
}

