import React from "react";
import { Canvas } from '@react-three/fiber'
import SceneTest from '../components/SceneTest';


const Acceuil = () => {
  return (
    <div className=" noPading" >
      {/* <p className="acro">
        Etes-vous un vrai geek ? Mettez vos connaissances à l'epreuve !{" "}
      </p> */}
      <div className="canvaContainer">
        <Canvas style={{ width: '100vw'}} >
          <SceneTest />
        </Canvas>
      </div>
    </div>
  );
};

export default Acceuil;
