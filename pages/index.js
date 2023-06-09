import styles from "./index.module.css"

// IndexPage ist ein Funktion, die JSX returned
// Wir nennen solch eine Funktion einen React Component
export default function IndexPage() {
    return (
        <div className={styles.index}>
            <h1>Hello World!</h1>
        </div>
    )
}
