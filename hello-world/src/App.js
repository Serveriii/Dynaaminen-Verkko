import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [luku, setLuku] = useState(1);

  return (
    <>
      <p> Luku on {luku}</p>
      <button onClick={()=>setLuku(Math.floor(Math.random() * 10) + 1)}>Arvo luku</button>
    </>
  )
}

export default App;
