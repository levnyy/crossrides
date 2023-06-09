import styles from '../components/buchungen/Buchungen.module.css'

export default function Buchungen() {
    return (
        <div className={styles.buchungen}>
            <h1>Ihre Buchungen</h1>

            <div className={styles.container}>
            <img src="mschasseral.png" className={styles.image}/>

                <div className={styles.content}>
                    <p>
                    bla bla bla bla bla lba Abfahrt 48min
                    lorem ipsum autosalon apfel schwein torte leiter herz.
                    kandersteg halten leiter  steigen essen strecke schlafen beissen teig arm kuchen bein
                    </p>
                </div>
            </div>
        </div>
    )
}