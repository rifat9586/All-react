import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
    
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Style></Style>
      <Prpse name="Lap" price="55"></Prpse>
    </>
  )
}
function Prpse(pop){
 console.log(pop)
  return <h2>This device: {pop.name}</h2>
}
function Person(){
  const age=20;
  const maney =200;
  return <h3>Hello rifat : {age+maney}</h3>
}
function Student(){
  
  return (
  <div className='student'>
    <h2>hello bro</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatibus eaque neque adipisci enim accusantium, nobis magnam dolorum sapiente similique culpa tenetur vitae explicabo temporibus nisi accusamus ullam expedita id?</p>
  </div>
  )
}
function Style(){
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }
  return (
    <div style={devStyle}>
      <h3>hero</h3>
      <h5>coding </h5>
    </div>
  )
}
export default App
