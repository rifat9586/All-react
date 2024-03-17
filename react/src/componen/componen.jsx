import { useEffect } from "react";
import { useState } from "react";
import Countres from "../component/Countres/Countres";
import './com.css'
const Component = () => {
    const [countres, setCountres] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountres(data))
    }, [])
    return (
        <div>
            <h3>component: {countres.length}</h3>

            <div className="grided">
                {
                    countres.map(countres => <Countres key={countres.cca3} countres={countres}></Countres>)
                }
            </div>
        </div>
    )
}
export default Component;