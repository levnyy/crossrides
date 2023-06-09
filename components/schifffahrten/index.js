const Schiffahrten = () => {
    const schiffe = useState([]);

    useEffect(() => {
        const fetchSchiffe = async () => {
            const response = await fetch('');
            const data = await response.json();
        };

        fetchSchiffe();
    },)

    function Schiffahrten() {
        return (
            <div>
                <img src="sea_map.png" className={styles.map}/>
                 
            </div>
        )
    }
}

