import { Text3D, Center } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function MainText()
{
    return <>
        <RigidBody type="fixed" colliders="cuboid">
            <Center top>
                <Text3D
                    font="./fonts/Greycliff CF Bold_Regular.json"
                    size={ 1.25 }
                    height={ 0.4 }
                    curveSegments={ 6 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                >
                    BLACK FRIDAY
                    <meshStandardMaterial
                        color="#999999"
                        metalness={ 1 }
                        roughness={ 0.5 }
                    />
                </Text3D>
            </Center>
        </RigidBody>
    </>
}