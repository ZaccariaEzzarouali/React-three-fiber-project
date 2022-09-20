import { TextureLoader } from "three";
import image from "./color-tunnel.jpg";
import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface CubeProps {
  scale?: number;
  size?: number;
  position?: [number, number, number];
}
function CubeColored(
  { scale, position, size }: CubeProps,
  props: JSX.IntrinsicElements["mesh"]
) {
  const spaceTexture = new TextureLoader().load(image);
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y -= 0.01));
  return (
    <mesh {...props} ref={ref} scale={scale} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial map={spaceTexture} />
    </mesh>
  );
}
export default CubeColored;
