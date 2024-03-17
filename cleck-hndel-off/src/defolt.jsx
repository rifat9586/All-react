import { useEffect, useState } from "react"
import Frants from "./friands";
export default function Defaul(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
<h3>Users: {users.length}</h3>
{
                users.map(users => <Frants friend={Frants}></Frants>)
}
        </div>
    )
}