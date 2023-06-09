import styles from './Buchungen.module.css'
export default function Buchungen() {

    return (
        <div className={styles.container}>
        <h1>Ihre Buchungen</h1>
        <div className={styles.buchungen}>

                <div className={styles.content}>
                    <h2>Schiffname</h2>
                    <img src="" className={styles.image}/>
                    <p>
                    bla bla bla bla bla lba Abfahrt 48min
                    lorem ipsum autosalon apfel schwein torte leiter herz.<br/>
                    kandersteg halten leiter  steigen essen strecke schlafen beissen teig arm kuchen bein
                    </p>
                    <button className={styles.button}>Buchen</button>
                </div>
                <img src="rideplan.png" className={styles.image}/>
            </div>
            </div>
    )
}