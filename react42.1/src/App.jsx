import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Blog from './component/blog/Blog'
import Bookmars from './component/bookmars/Bookmars'

function App() {
 const [bookmars,setBookmars]=useState([]);

 const handelEvent = bloging =>{
   const newBookmarks=[...bookmars, bloging]
   setBookmars(newBookmarks)
 }

  return (
    <>
      
      <Header></Header>
      <div className='flex w-[75%] m-auto mt-6 gap-4'>
        <Blog handelEvent={handelEvent}></Blog>
        <Bookmars bookmars={bookmars} ></Bookmars>
      </div>
      
    </>
  )
}

export default App
