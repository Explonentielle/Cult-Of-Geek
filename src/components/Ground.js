import { MeshReflectorMaterial } from '@react-three/drei'
import convertDegrees from '../data/convertDegrees'
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'



const Ground = () => {

    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/texture6.jpg');
   


    return (
        <mesh position={[0, -0.5, -40]} rotation={[convertDegrees(0), 0, 0]} castShadow receiveShadow>
            <planeGeometry args={[600, 600]} />
            {texture && (
                <MeshReflectorMaterial
                    castShadow 
                    receiveShadow
                    envMapIntensity={0}
                    map={texture}
                    normalScale={[0.15, 0.15]}
                    dithering={true}
                    roughness={0.7}
                    blur={[1000, 400]}
                    mixBlur={5}
                    mixStrength={50}
                    mixContrast={1}
                    resolution={1024}
                    mirror={0.5}
                    depthScale={0.1}
                    reflectorOffset={0}
                    depthToBlurRatioBias={0.1}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1.}
                />
            )}
        </mesh>
    )
}

export default Ground