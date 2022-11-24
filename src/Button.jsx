import { Line, Text } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap'

export default function Button()
{
    const line = useRef()
    const halfExtent = { x: 4.7, y: 0.8, z: 0 }

    const onEnter = () =>
    {
        document.body.style.cursor = 'pointer'
        gsap.to(line.current.position, { duration: 0.3, ease: 'back.out(2.5)', z: 0.2 })
    }

    const onLeave = () =>
    {
        document.body.style.cursor = 'default'
        gsap.to(line.current.position, { duration: 0.2, z: 0 })
    }

    const onClick = () =>
    {
        window.open('https://threejs-journey.com/join/2022blackfriday', '_blank')
    }

    return <group
        position={ [ 0, 0.01, 5.5 ] }
        rotation-x={ - Math.PI * 0.5 }
    >
        <mesh
            visible={ false }
            onPointerEnter={ onEnter }
            onPointerLeave={ onLeave }
            onClick={ onClick }
        >
            <planeGeometry args={ [ halfExtent.x * 2, halfExtent.y * 2 ] } />
        </mesh>

        <Line
            ref={ line }
            points={ [
                [ - halfExtent.x, halfExtent.y, 0 ],
                [ halfExtent.x, halfExtent.y, 0 ],
                [ halfExtent.x, -halfExtent.y, 0 ],
                [ - halfExtent.x, -halfExtent.y, 0 ],
                [ - halfExtent.x, halfExtent.y, 0 ]
            ] }
            color={ [ 1.25, 1.25, 1.25 ] }
            lineWidth={ 5 }
            toneMapped={ false }
        />

        <Text
            font="./fonts/GreycliffCF-Heavy.woff"
            fontSize={ 1 }
            text={'2022BLACKFRIDAY'}
            textAlign="center"
        >
            <meshBasicMaterial color={ [ 1.25, 1.25, 1.25 ] } toneMapped={ false } transparent opacity={ 1 } />
        </Text>
    </group>
}