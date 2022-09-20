import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import donut from "./donut-texture.jpg";
interface TorusProps {
  scale?: number;
  position?: [number, number, number];
}

function Torus(
  { scale, position }: TorusProps,
  props: JSX.IntrinsicElements["mesh"]
) {
  const spaceTexture = new TextureLoader().load(donut);
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(
    (state, delta) => (
      (ref.current.rotation.y += 0.02), (ref.current.rotation.x += 0.01)
    )
  );
  return (
    <mesh {...props} ref={ref} scale={scale} position={position}>
      <torusGeometry args={[20, 1.5, 30, 100]} />
      <meshBasicMaterial />
    </mesh>
  );
}

export default Torus;
