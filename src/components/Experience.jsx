import { Bloodsport } from './Bloodsport'
import { Snake } from './Snake'
import { SectionTitle } from './SectionTitle'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'



const Experience = () => {
  
  return (
    
    <> 
    <mesh>
        <Bloodsport/>
        <Snake/>
        
        <directionalLight position={[20, 0, 20]} intensity={0.3} color={"white"}/>
        <directionalLight position={[0, 0, 20]} intensity={0.3} color={"white"}/>
        <pointLight position={[0, 0, 19.5]} intensity={0.3} decay={3} distance={5} />
    </mesh>
    
    <group>
        {/* HOME */}
        <group>
          <SectionTitle position-x={-0.45} position-z={18.6}  position-y={-0.01} rotation={[0,0,0]}>SCENCE</SectionTitle>
        </group>
        {/* PROJECTS */}
        <group>
        </group>
        {/* CONTACT */}
        <group></group>
      </group>
      <Rig from={-Math.PI / 2} to={Math.PI / 2.66}/>
    </>
  )
}

function Rig({ vec = new THREE.Vector3() }) {
  useFrame((state) => {
    state.camera.position.lerp(vec.set(   0.01 + state.pointer.x , 0, 20), 0.0035)
    state.camera.position.lerp(vec.set( state.pointer.y, 0, 20), 0.0035)
    state.camera.lookAt(0, 0, 0)
  })
}





export default Experience