import { MeshReflectorMaterial } from '@react-three/drei'
import convertDegrees from '../data/convertDegrees'
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'



const Ground = () => {

    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/texture.jpg');
   


    return (
        <mesh position={[0, -0.5, -10]} rotation={[convertDegrees(-4), 0, 0]} castShadow receiveShadow>
            <planeGeometry args={[2000, 2000]} />
            {texture && (
                <MeshReflectorMaterial
                    castShadow 
                    receiveShadow
                    color={'lightgrey'}
                    envMapIntensity={1}
                    map={texture}
                    normalScale={[10, 10]}
                    dithering={true}
                    roughness={1}
                    blur={[100, 100]}
                    mixStrength={50}
                    mixContrast={1}
                    resolution={1024}
                    mirror={1}
                    depthScale={0.1}
                    reflectorOffset={0.01}
                    depthToBlurRatioBias={0.1}
                    
                />
            )}
        </mesh>
    )
}

export default Ground