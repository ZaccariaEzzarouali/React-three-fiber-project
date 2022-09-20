interface StarProps {
  scale?: number;
}

const Star = ({ scale = 1 }: StarProps) => {
  let x: number = Math.floor(Math.random() * 100 - 50);
  let y: number = Math.floor(Math.random() * 100);
  let z: number = Math.floor(Math.random() * 100 - 50);
  return (
    <mesh scale={scale} position={[x, y, z]}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color="#0xffffff" />
    </mesh>
  );
};
export default Star;
