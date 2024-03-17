import { useState } from "react"

export default function Counter(){
    const [Count,setValue]=useState(11);
    const counted= () => {
        const addedCount=Count+1;
        setValue(addedCount);
    }
    const negCunt = ()=>{
        // const negetiv=Count - 1;
        setValue(Count - 1);
    }
    return(
        <div style={{border:'1px solid red',padding:'20px'}}>
            <h3>Counter: {Count}</h3>
            <button onClick={counted}>Click +</button>
            <button onClick={negCunt}>Click -</button>
        </div>
    )
}