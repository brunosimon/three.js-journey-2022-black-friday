import { CuboidCollider, RigidBody } from '@react-three/rapier'

export default function Boundings({ width = 10, height = 10, depth = 10, position = [ 0, 0, 0 ] })
{
    const thickness = 1

    return <RigidBody type="fixed" position={ position } restitution={ 1 }>
        {/* Z pos  */}
        <CuboidCollider args={ [ width * 0.5, height * 0.5, thickness * 0.5 ] } position={ [ 0, height * 0.5, (depth + thickness) * 0.5 ] } />

        {/* Z neg  */}
        <CuboidCollider args={ [ width * 0.5, height * 0.5, thickness * 0.5 ] } position={ [ 0, height * 0.5, - (depth + thickness) * 0.5 ] } />

        {/* X pos  */}
        <CuboidCollider args={ [ thickness * 0.5, height * 0.5, depth * 0.5 ] } position={ [ (width + thickness) * 0.5, height * 0.5, 0 ] } />

        {/* Y pos  */}
        <CuboidCollider args={ [ thickness * 0.5, height * 0.5, depth * 0.5 ] } position={ [ - (width + thickness) * 0.5, height * 0.5, 0 ] } />

        {/* Floor */}
        <CuboidCollider args={ [ width * 0.5, thickness * 0.5, depth * 0.5 ] } position={ [ 0, - thickness * 0.5, 0 ] } />

        {/* Ceiling */}
        <CuboidCollider args={ [ width * 0.5, thickness * 0.5, depth * 0.5 ] } position={ [ 0, height + thickness * 0.5, 0 ] } />
    </RigidBody>
}