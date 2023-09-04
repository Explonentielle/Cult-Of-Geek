import { Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react';
import React from 'react'
import letters from '../data/tittleContent'


const Letters = () => {
    const letterRefs = useRef([])
    const [hoveredLetterIndex, setHoveredLetterIndex] = useState(null);
  
    useFrame((state) => {
      letters.letters.forEach((letter, index) => {
        jumpLetter(index);
      });
    });
  
    const jumpLetter = (index) => {
      const speed = 0.2;
      const targetY = hoveredLetterIndex === index ? 1 : 0;
      letterRefs.current[index].position.y += (targetY - letterRefs.current[index].position.y) * speed;
    };
  
    function InitJump() {
      const speed = 0.2;
      const jumpNextLetter = (index) => {
        if (index >= letters.letters.length) {
          setTimeout(() => (setHoveredLetterIndex(null)), 300);
          return;
        }
        setHoveredLetterIndex(index);
        const currentLetter = letterRefs.current[index];
        const targetY = hoveredLetterIndex === index ? 1 : 0;
        currentLetter.position.y += (targetY - currentLetter.position.y) * speed;
  
        setTimeout(() => {
          currentLetter.position.y = targetY;
          jumpNextLetter(index + 1);
        }, 50);
      };
      jumpNextLetter(0);
    }

    useEffect(() => {
        InitJump()
      }, [])
  
    return (
        <Text3D letterSpacing={-0.2} font="/Inter_Bold.json">
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
        </Text3D>
    )
}

export default Letters