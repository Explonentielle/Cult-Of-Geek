import React from 'react'
import { Canvas } from '@react-three/fiber'
import SceneTest from './SceneTest';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation()
    let title = false
    let classname = 'canvaContainer'

    switch (location.pathname) {
        case '/':
            title = true;
            break;
        case '/Categories':
            classname = 'canvaContainerCategorie';
            break;
        case '/Recap':
            classname = 'canvaContainerRecap';
            break;
        case '/Inscription':
            classname = 'canvaContainerRegister';
            break;
        case '/Mon-compte':
            classname = 'canvaContainerAccount';
            break;
        case '/Contact':
            classname = 'canvaContainerContact';
            break;
        default:
            // Code à exécuter si aucun des cas précédents ne correspond
            break;
    }

    return (
        <div className={classname}>
            <Canvas style={{ width: '100vw' }} >
                <SceneTest title={title} />
            </Canvas>
        </div>
    )
}

export default Layout