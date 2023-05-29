import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Airplane(props) {
  const { nodes, materials } = useGLTF("./models/airplane/model.glb");
  const helix = useRef();
  const HELIX_SPEED = 16;
  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });

  materials.plane.color.set('white');

  return (
<>
<directionalLight position={[0,3,1]} intensity={0.1}/>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        material={materials.plane}
      ><meshStandardMaterial color={'white'}/></mesh>
      <mesh
        ref={helix}
        castShadow
        receiveShadow
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      ><meshStandardMaterial color={'white'}/></mesh>
    </group>
    </>
  );
  
}

useGLTF.preload("./models/airplane/model.glb");
