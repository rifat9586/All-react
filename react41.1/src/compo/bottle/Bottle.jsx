import { useEffect, useState } from "react";
import Bottle from "../Bottless/Bottless";
import './Bottle.css'
import Card from "../Card/Card";

const Bottles = () => {
    const [bottles, setBottles]=useState([]);
    const [card, setCard]=useState([]);

    useEffect(()=>{
        fetch(`Bottle.json`)
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    const handelAddEvent= bottle =>{
       const newCard=[...card, bottle];
        setCard(newCard);
    }
    return (
        <div>
            <h3>Bottles aboleavle: {bottles.length} </h3>
            <Card card={card}></Card>



           <div className="const">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAddEvent={handelAddEvent}></Bottle>)
                }
           </div>
        </div>
    );
};

export default Bottles;