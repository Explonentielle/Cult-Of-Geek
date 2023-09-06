import React from "react";
import { Canvas } from '@react-three/fiber'
import SceneTest from '../components/SceneTest';


const Acceuil = () => {
  return (
    <div className="noPadingNoBg" >
      <div className="canvaContainer">
        <Canvas style={{ width: '100vw'}} >
          <SceneTest />
        </Canvas>
      </div>
    </div>
  );
};

export default Acceuil;
