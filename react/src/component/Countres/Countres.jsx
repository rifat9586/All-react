import { useState } from 'react';
import './country.css'
const Countres = ({countres}) => {
    const {name,flags} = countres;

    const [Vigeted,setVigeted]=useState(false);
    const handdel = () =>{
        setVigeted(!Vigeted);
    }
    return (
        <div className={`constry ${Vigeted ? "ccolor " :"red"}`}>
            <h4>Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <button onClick={handdel}>{Vigeted ? 'i veg' : 'going'}</button>
            {Vigeted ? "I'm vegetad" : "not vegetad"}
        </div>
    );
};

export default Countres;