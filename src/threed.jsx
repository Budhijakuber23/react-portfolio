import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function threed() {
  return (
    <>
      <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={20} damping={0.5}>
        <Experience />
        </ScrollControls>
      </Canvas>
      {/* <Overlay/> */}
    </>
  );
}

export default threed;
