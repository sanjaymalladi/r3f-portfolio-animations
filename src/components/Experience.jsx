import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Group } from "three";

export const Experience = () => {
  return (
      <>
      <OrbitControls />
      <group>
      <Avatar />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
