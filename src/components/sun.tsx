import { TextureLoader } from "three";
import sun from "./sun.jpg";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SunProps {
  scale?: number;
}
function Sun({ scale }: SunProps, props: JSX.IntrinsicElements["mesh"]) {
  const suntexture = new TextureLoader().load(sun);
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  return (
    <mesh ref={ref} {...props} scale={scale} position={[3, 3, 12]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial map={suntexture} />
    </mesh>
  );
}
export default Sun;
