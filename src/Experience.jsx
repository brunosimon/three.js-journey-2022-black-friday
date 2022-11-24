import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Debug, Physics } from '@react-three/rapier'
import { useEffect } from 'react'
import Floor from './Floor.jsx'
import MainText from './MainText.jsx'
import BackgroundText from './BackgroundText.jsx'
import { useThree } from '@react-three/fiber'
import Effects from './Effects.jsx'
import Fog from './Fog.jsx'
import Logo from './Logo.jsx'
import Boundings from './Boundings.jsx'
import Cylinder from './Cylinder.jsx'
import { useControls } from 'leva'
import Button from './Button.jsx'

export default function Experience()
{
    const { controls, gl, camera } = useThree()

    useEffect(() =>
    {
        if(controls)
        {
            controls.target.x = 1
            controls.target.z = 3
        }
    }, [ controls ])

    const options = useControls({
        debug: { value: false }
    })

    return <>

        { options.debug && <Perf position="top-left" /> }

        <OrbitControls
            makeDefault
            maxPolarAngle={ Math.PI * 0.49 }
            enablePan={ false }
            minDistance={ 1 }
            maxDistance={ 30 }
        />

        <Effects />
        
        {/* Fog */}
        <Fog />

        <Physics gravity={ [ 0, - 9.08, 0 ] }>

            {/* Debug */}
            {/* <Debug /> */}

            {/* Floor */}
            <Floor />

            {/* Main Text */}
            <MainText />

            {/* Background Text */}
            <BackgroundText y={ 0.02 } />

            {/* Buttons */}
            <Button />

            {/* Logo */}
            <Logo />

            {/* Cylinders */}
            <Cylinder name="cylinder1" color="#ff5959" radius={ 0.5 } position={ [ -6.4, 5 ] } intensity={ 3.5 } />
            <Cylinder name="cylinder2" color="#708fff" radius={ 0.5 } position={ [ -4.9, -12.9 ] } intensity={ 3.5 } />
            <Cylinder name="cylinder3" color="#ff8753" radius={ 0.5 } position={ [ 4.3, -4.8 ] } intensity={ 4 } />

            {/* Boundings */}
            <Boundings width={ 30 } height={ 10 } depth={ 30 } position={ [ 0, 0, - 5] } />


        </Physics>

    </>
}