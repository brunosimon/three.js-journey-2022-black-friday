import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Floor()
{
    const y = 0

    const roughnessTexture = useTexture('textures/dirt_aerial_02_disp_2k.jpg')
    roughnessTexture.repeat.x = 30
    roughnessTexture.repeat.y = 30
    roughnessTexture.wrapS = THREE.RepeatWrapping
    roughnessTexture.wrapT = THREE.RepeatWrapping

    const blurOptions = useControls(
        'blur',
        {
            mixBlur: { value: 1, min: 0, max: 1 },
            mixStrength: { value: 40, min: 0, max: 200 },
            roughness: { value: 1, min: 0, max: 1 },
            depthScale: { value: 1.2, min: 0, max: 2 },
            minDepthThreshold: { value: 0.4, min: 0, max: 1 },
            maxDepthThreshold: { value: 1.4, min: 0, max: 2 },
            metalness: { value: 0.5, min: 0, max: 1 },
            color: { value: '#050505' },
        }
    )

    return <>
        <mesh rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={ [ 200, 200 ] } />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                // mixBlur={blurOptions.mixBlur}
                // mixStrength={40}
                roughnessMap={roughnessTexture}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
                {...blurOptions}
            />
        </mesh>
    </>
}