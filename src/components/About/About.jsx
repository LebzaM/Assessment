import React, {Suspense} from 'react'
import '../About/About.css'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cylinder3d from '../Header/Cylinder3d';

const About = () => {
  return (
    <div className="section_about">
      
      <div className='container_about'>
        

        <div className='img_container_about'>
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cylinder3d />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>

        {/* Add Suspense to optimize loading time */}

        </div>

        <div className='intro_container'>
          <h5>
          I am a junior developer who not only thinks outside the box, excuse the pun but I'm also a hardworking individual.<br/><br/> I'm passionate about everything that I do.<br/><br/> I first became interested in software development during my studies in information science. I was fascinated by the ways in which programming languages could be used to build complex and powerful systems that could solve real-world problems.<br/><br/> I've since went on to gain experience  in a variety of programming languages and frameworks, including Javascript, React, SQL, Python and More. I am always eager to learn new technologies and techniques.


          </h5>
          


        </div>
      </div>

  
    </div>
  )
}

export default About