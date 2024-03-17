import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Component/whass/Watch'

function App() {
   const [watch, setWatchss]=useState([]);

   useEffect(()=>{
    fetch('watch.json')
    .then(res => res.json())
    .then(data => setWatchss(data))
   },[])

  // const watch = [
  //   { Id: 1, name: 'apple watch', price: 2000 },
  //   { Id: 2, name: 'oppo watch', price: 2000 },
  //   { Id: 3, name: 'MI watch', price: 2000 },
  //   { Id: 4, name: 'vivo watch', price: 2000 },
  // ]


  return (
    <>
      <h1>Hello</h1>
      {
        watch.map(watch => <Watch key={watch.Id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
