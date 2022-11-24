import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'

export default function Effects()
{
    return <EffectComposer>
        <Bloom mipmapBlur />
        <Vignette />
    </EffectComposer>
}