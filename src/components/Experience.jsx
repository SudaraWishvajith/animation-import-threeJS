import { OrbitControls } from "@react-three/drei";
import Greetings from "./Greetings";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
  
      <Greetings />
    </>
  );
};
