import Navigation from "@/components/navigation";
import styles from "./Header.module.css"
import {useRouter} from "next/router";
export default function Header(){

    const router = useRouter()

    return(
        <div className={styles.head}>
            <a href="/">
                <img src="crossrides.png" className={styles.logo}/>
            </a>
            <Navigation className={styles.navigation}/>
            <hr/>
        </div>
    )
}