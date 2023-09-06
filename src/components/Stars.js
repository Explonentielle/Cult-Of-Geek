import React from 'react'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three';


const Stars = (props) => {
    const ref = useRef();
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
  
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; 
    }

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20
        ref.current.rotation.y -= delta / 30
    })
    return (
        <group scale={5} rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#ffa0e0" size={0.05} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

export default Stars