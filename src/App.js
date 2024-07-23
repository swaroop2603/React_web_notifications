import logo from './logo.svg';
import './App.css';
import './messaging.js'
import { useEffect } from 'react';
import { generateToken,messaging } from './messaging.js';
import { onMessage } from "firebase/messaging";
function App() {
  useEffect(()=>{
    generateToken();
    onMessage(messaging,(payload)=>{
      console.log(payload)
    })

  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;