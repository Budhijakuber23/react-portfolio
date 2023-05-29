import { Environment, Sphere } from "@react-three/drei"
import {Gradient, LayerMaterial} from 'lamina'
import * as THREE from "three"

export const Background = () =>{
    const colorA = "#4B0082";
    const colorB = "#FFC0CB";
    const start = 0;
    const end = -0.5;
    return <>

    <Sphere scale={[500,500,500]} rotation-y={Math.PI/2} rotation-x={Math.PI/1.05} >
        <LayerMaterial
            side={THREE.BackSide}
        >
            <Gradient
                colorA={colorA}
                colorB={colorB}
                axes={"y"}
                start={start}
                end={end}
            />
        </LayerMaterial>
    </Sphere>

    <Environment resolution={256}>
    <Sphere scale={[100,100,100]} rotation-y={Math.PI/2} rotation-x={Math.PI}>
        <LayerMaterial
            side={THREE.BackSide}
        >
            <Gradient
                colorA={colorA}
                colorB={colorB}
                axes={"y"}
                start={start}
                end={end}
            />
        </LayerMaterial>
    </Sphere>
    </Environment>
    </>
}