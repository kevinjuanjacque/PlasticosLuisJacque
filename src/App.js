import './App.css';
import { RouterPublic } from './router/RouterPublic';
import Particles from 'react-particles-js';
import { Context } from './hooks/Context';
import { useState } from 'react';
function App() {
  const [Products, setProducts] = useState({
    cantidad:0,
    productos:[]
  })
  return (
    <Context.Provider value={{
      Products, 
      setProducts
    }}>
    <div id="particle-canvas">
      <Particles  width="100%" height="100%" params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        }
      }} />
    </div>
        <RouterPublic />
      
    </Context.Provider>
  );
}

export default App;
