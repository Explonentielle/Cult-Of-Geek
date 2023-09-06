import React from 'react'
import Form from '../components/Form';
import { Canvas } from '@react-three/fiber'
import SceneTest from '../components/SceneTest';

const About = () => {
    return (
        <div className="Container">
            <Form />
            <div className="canvaContainer">
                <Canvas style={{ width: '100vw' }} >
                    <SceneTest title={'notitle'} />
                </Canvas>
            </div>
        </div>
    )
}

export default About