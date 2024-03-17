import './App.css'
import Counter from './add';
import Defaul from './defolt';

function App() {
  
  function cleckHandel(){
    alert('not ok');
  }
const click2=() =>{
  alert('Yes all rong');
}
const vajila=(num) => {
  alert(num+5);
}
  return (
    <>
    <Defaul></Defaul>
    <Counter></Counter>
      <button onClick={cleckHandel}>cleck</button>
      <button onClick={click2}>Cleck-2</button>
      <button onClick={() =>{alert('all click')}}>thardClick</button>
      <button onClick={()=> vajila(5)}>forh</button>
    </>
  )
}

export default App
