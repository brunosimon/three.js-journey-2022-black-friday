import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'

export default function Cylinder({ name = 'cylinder', color = '#9270ff', radius = 0.5, height = 20, position = [ 0, 0 ], intensity = 3 })
{
    const options = useControls(
        name,
        {
            color: { value: color },
            intensity: { value: intensity, min: 1, max: 10 },
            radius: { value: radius, min: 0, max: 2 },
            position: { value: { x: position[0], y : position[1] }, min: - 20, max: 20 }
        }
    )

    const threeColor = new THREE.Color(options.color)

    return <>
        <RigidBody type="fixed" colliders="trimesh" position={ [ options.position.x, height * 0.5, options.position.y ] } restitution={ 0.5 }>
            <mesh>
                <cylinderGeometry args={ [ options.radius, options.radius, height, 20 ] } />
                <meshBasicMaterial color={ [ threeColor.r * options.intensity, threeColor.g * options.intensity, threeColor.b * options.intensity ] } toneMapped={ false }/>
            </mesh>
        </RigidBody>
        <pointLight color={ threeColor } position={ [ options.position.x, 3, options.position.y ] } />
    </>
}