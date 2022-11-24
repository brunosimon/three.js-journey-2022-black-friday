import { Text } from '@react-three/drei'

export default function BackgroundText()
{
    return <>
        <Text
            font="./fonts/GreycliffCF-Heavy.woff"
            fontSize={ 1 }
            rotation-x={ - Math.PI * 0.5 }
            position={ [ 0, 0.02, 3 ] }
            text={'Three.js Journey\n50% off'}
            textAlign="center"
        >
            <meshBasicMaterial color={ [ 1.25, 1.25, 1.25 ] } toneMapped={ false } transparent opacity={ 1 } />
        </Text>
    </>
}