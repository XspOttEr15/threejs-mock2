import { Canvas, useFrame, useThree} from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import { Environment, Html,  Loader,  Stars } from '@react-three/drei'
import Interface from './components/Interface'
import { Mon } from './components/Mon'
import { OrbitControls } from '@react-three/drei'


function App() {
 
  return (
    <>
    <Navbar/>
      <Canvas shadows dpr={[1, 2]} camera={{position:[0,0,20], fov:60}} >
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 20]} />
      <Stars/>
        <Experience/>
        <Html center position={[0,-3,0]}  >
          <Interface/>
        </Html>
        <Environment preset="city" />
      </Canvas>

      <Canvas shadows dpr={[1, 2]} camera={{position:[2,3,22], fov:60, rotation:[20,20,20]}}  >
        <OrbitControls enableZoom={false}/>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#ffffff', 0, 200]} />
      <Stars/>
        <Mon/>
        <Environment preset="city" />
      </Canvas>
      <Loader/>
    </>
  )
}

 




export default App
