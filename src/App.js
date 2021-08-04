import './App.css';
import React, {Suspense} from 'react';

import Model from './components/Three/chest.js';
import Lights from './components/Three/lights.js';
import Floor from './floor.js';
import {Canvas} from "react-three-fiber";

function App() {
  return (
    <>
      <div className="App">
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [-5, 4, 4], fov: 40}}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model />
          <Floor />
        </Suspense>

      </Canvas>
      </div>
    </>
  );
}

export default App;
