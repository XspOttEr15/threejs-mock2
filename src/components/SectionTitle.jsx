import {  Environment, Text3D } from "@react-three/drei";
import { MeshBasicMaterial, TextureLoader } from "three";

export const SectionTitle = ({ children, ...props }) => {
    const texture = new TextureLoader().load("./textures/Abstract.jpg");
  return (
    <Text3D font={"fonts/Signika_Bold.json"} size={0.2} {...props}>
      {children}
      <meshLambertMaterial map={texture} />
    </Text3D>
  );
};
