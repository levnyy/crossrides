import styles from './Buchungen.module.css'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Items({type}) {
    const [input, setInput] = useState("")
    const [items,setItems] = useState([])
    const [link,setLink] = useState()
//useState items

    useEffect(()=> {
        const loadItem = async () => {
            switch (type) {
                case "charakters":
                    const Charakters = await ApexAPI.findCharakterByName(input)
                    const LinkShip = "/buchungen"
                    setLink(LinkShip)
                    setItems(Charakters)
                    break;
            }
        }
        if(!loadItem()) console.log("Posts are not loaded")
    },[input])
    const handleChange = (e) => setInput(e.target.value)

    return (
        <>
            <div className={styles.box}>
                {
                  items && items.map(item  => {
                        return (
                            <div key={item.id}>
                                <ul>
                                    <li>

                                        <img src={item.img} className={styles.img}/>
                                        <p>{item.name}</p>
                                        <p>{item.reise}</p>
                                        <Link  href={`/${link}/${item.id}`} className={styles.detailsLink}>Buchen</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

