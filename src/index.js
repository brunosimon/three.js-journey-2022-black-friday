import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const portrait = window.innerHeight > window.innerWidth
const portraitMultiplier = portrait ? 2 : 1

root.render(
    <>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 6 * portraitMultiplier, 8 * portraitMultiplier, 12 * portraitMultiplier ]
            } }
        >
            <Experience />
        </Canvas>
        <Leva collapsed />
    </>
)