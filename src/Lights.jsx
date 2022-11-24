export default function Lights()
{
    return <>
        <directionalLight castShadow position={ [ - 2, 1.5, 3 ] } intensity={ 0.5 } />
        <ambientLight intensity={ 0.5 } />
    </>
}