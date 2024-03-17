import React from 'react';
import { add, multi, addOfAllRigihtAndPorefullMan as addOf } from '../../Utilete/calculator';


const Sunglas = () => {
    const farst  = 44;
    const secand = 50;
    const sum = add(farst,secand)
    const mult=multi(farst,secand)
    const addofend=addOf(farst,secand)
    return (
        <div>
            <h3>hello</h3>
        </div>
    );
};

export default sunglas;