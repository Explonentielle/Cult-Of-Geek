import { Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import convertDegrees from '../data/convertDegrees'
import React from 'react'
import { ContactShadows } from '@react-three/drei'
import Ground from './Ground';
import Letters from './Letters';



const SceneTest = () => {
  var largeur = window.innerWidth;
  const orbitControlsRef = useRef(null)
  console.log(largeur)

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse
    }
  });

  useEffect(() => {
    setTimeout(() => {
      if (orbitControlsRef.current) {
        orbitControlsRef.current.setAzimuthalAngle(convertDegrees(-20));
        orbitControlsRef.current.update();
      }
    }, 200)
  }, [orbitControlsRef.current])




  return (
    <>

      <PerspectiveCamera makeDefault fov={70} position={[0, 0, 20]}>

        <spotLight position={[-10, 10, 10]} angle={0.5}  intensity={10} castShadow shadow-mapSize={[200, 200]} />

      </PerspectiveCamera>

      <OrbitControls ref={orbitControlsRef}
        maxAzimuthAngle={convertDegrees(45)}
        minAzimuthAngle={convertDegrees(-45)}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 2.3}
        enableZoom={false}
         />

      <Center position={[0, 0, 4]} rotation={[0, 0, 0]}>

        <ambientLight intensity={1} position={[0, 10, 0]} />
        <ContactShadows rotation-x={Math.PI / 2.5} position={[0, -1.5, 0]} opacity={0.4} width={10} height={10} blur={2} far={1.5} />
        <Letters />
        {/* <Ground /> */}

      </Center>
    </>
  )
}

export default SceneTest;











{/* <Text3D letterSpacing={-0.2} font="/Inter_Bold.json">
  {letters.letters.map((letter, index) => (
    <mesh
      key={index}
    >
      <Text3D
        position={letter.position}
        ref={(ref) => (letterRefs.current[index] = ref)}
        onPointerEnter={() => setHoveredLetterIndex(index)}
        onPointerLeave={() => setTimeout(() => setHoveredLetterIndex(null), 500)}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        size={1}
        font="/Inter_Bold.json"
      >
        {letter.letter}
        <meshStandardMaterial color={"beige"} />
      </Text3D>
    </mesh>
  ))}
</Text3D> */}


{/* <mesh rotation={[convertDegrees(270), 0, 0]}>
  <planeGeometry args={[2000, 2000]} />
  <MeshReflectorMaterial
    blur={[100, 100]}
    color={"#303030"}
    mixBlur={1}
    opacity={2}
    depthScale={1.1}
    minDepthThreshold={0.4}
    maxDepthThreshold={1.25}
    roughness={1}
  />
</mesh> */}