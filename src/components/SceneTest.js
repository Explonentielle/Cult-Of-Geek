import { Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react';
import convertDegrees from '../data/convertDegrees'
import React from 'react'
import { ContactShadows } from '@react-three/drei'
import Letters from './Letters';
import Stars from './Stars'

const SceneTest = ({ title }) => {
  var largeur = window.innerWidth;
  const [timer, setTimer] = useState(false)
  const orbitControlsRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 200)
  }, [])

  useEffect(() => {
    if (orbitControlsRef.current) {
      const controls = orbitControlsRef.current;
      const animationDuration = 4000;
      const startDistance = 50;
      const targetDistance1 = 15;
      const targetDistance2 = 100;
      const startTime = Date.now();

      function animateCamera() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / animationDuration);

        let currentDistance;

        if (progress <= 0.5) {

          currentDistance = startDistance + (targetDistance1 - startDistance) * (progress * 2);
        } else {

          currentDistance = targetDistance1 + (targetDistance2 - targetDistance1) * ((progress - 0.5) * 2);
        }

        controls.object.position.z = currentDistance;
        controls.object.updateProjectionMatrix();

        if (progress < 1) {
          requestAnimationFrame(animateCamera);
        }
      }

      animateCamera();
    }
  }, [timer]);

  return (
    <>

      <OrbitControls ref={orbitControlsRef}
        maxAzimuthAngle={convertDegrees(60)}
        minAzimuthAngle={convertDegrees(-60)}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={10}
        maxDistance={100}
      />

      <Center position={[0, 0, 0]} rotation={[0, 0, 0]}>

        <PerspectiveCamera makeDefault fov={largeur < 1400 ? 100 : 70} position={[0, 0, 50]}>
          <spotLight position={[0, 10, 20]} angle={Math.PI} intensity={2} castShadow />
        </PerspectiveCamera>

        <ambientLight intensity={1} position={[0, 10, 0]} />
        <ContactShadows rotation-x={Math.PI / 2.5} position={[0, -1.5, 0]} opacity={0.6} width={15} height={15} blur={1} far={1.5} />

        {title === false ? null : <Letters />}
        <Stars />
      </Center>
    </>
  )
}

export default SceneTest;
