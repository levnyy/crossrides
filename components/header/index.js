import Navigation from "@/components/navigation";
import styles from "./Header.module.css"
import {useRouter} from "next/router";
export default function Header(){

    const router = useRouter()

    const tree = () => {
        router.push("/tree")
    };

    return(
        <div className={styles.head}>
            <button onClick={tree} className={styles.button}>
                <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/cd4e9ea43d04220d6f90db0e66758a51.png" className={styles.logo}/>
            </button>
            <img src="https://cdn.sanity.io/images/2p7hn0qq/production/caa4b8be76592d55e3406f9f1802de45ff11837d-1806x1794.webp" className={styles.logo2}/>
            <Navigation/>
            <hr/>
        </div>
    )
}