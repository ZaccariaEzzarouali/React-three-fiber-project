import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Torus from "./components/Torus";
import CubeColored from "./components/Cube";
import Star from "./components/star";
import Sun from "./components/sun";
import Background from "./components/space.jpg";
import React, { UIEvent } from "react";

function App() {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${Background})`,
        }}
      >
        {Array.from(Array(200)).map(() => (
          <Star />
        ))}
        <Sun />
        <Torus scale={1} position={[0, 0, 0]} />
        <CubeColored size={2} />
        <ambientLight />
        <OrbitControls />
      </Canvas>
      
    </>
  );
}

export default App;
