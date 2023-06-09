import styles from "../styles/Home.module.css"
export default function Home() {

    return (
        <div className="bg-image">
            <img src="crossrides.png" className={styles.crossrides}/>
            <h3 className={styles.title}>Schifffahrten</h3>
            <h3 className={styles.title}>Buchen</h3>
        </div>
        
    )
}

