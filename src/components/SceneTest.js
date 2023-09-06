import { Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import convertDegrees from '../data/convertDegrees'
import React from 'react'
import { ContactShadows } from '@react-three/drei'
import Letters from './Letters';
import Ground from './Ground'
import Stars from './Stars'

const SceneTest = ({ title }) => {
  var largeur = window.innerWidth;
  const orbitControlsRef = useRef(null)

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
    }
  });

  useEffect(() => {
  }, [orbitControlsRef.current])

  return (
    <>

      <OrbitControls ref={orbitControlsRef}
        maxAzimuthAngle={convertDegrees(45)}
        minAzimuthAngle={convertDegrees(-45)}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        enableZoom={false}
      />

      <Center position={[0, 0, 0]} rotation={[0, 0, 0]}>

        <PerspectiveCamera makeDefault fov={largeur < 1400 ? 100 : 100} position={[0, 0, 15]}>
          <spotLight position={[0, 10, 20]} angle={Math.PI} intensity={2} castShadow />
        </PerspectiveCamera>

        <ambientLight intensity={1} position={[0, 10, 0]} />
        <ContactShadows rotation-x={Math.PI / 2.5} position={[0, -1.5, 0]} opacity={0.6} width={15} height={15} blur={1} far={1.5} />
       
        {title === 'notitle' ? null :  <Letters />}
        <Stars/>
      </Center>
    </>
  )
}

export default SceneTest;
