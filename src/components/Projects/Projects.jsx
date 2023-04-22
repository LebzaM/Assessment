import React from 'react'
import '../Projects/Projects.css'
import Phone from '../Assets/phone.png'
import Screenshot from '../Assets/screenshot1.png'
import Screenshot3 from '../Assets/screenshot3.png'
const Projects = () => {
  return (
    <div className='container_projects'>
        <h1 className='title_projects'>Want to see some of my projects?</h1>
        <h5 className='title_projects2'>https://github.com/LebzaM</h5>

        <div className='left'>
            <img src={Phone} />
            
            <div class="phoneScreen">
                        <img src={Screenshot} alt="" class="phoneApp" />
                    
                            
                    </div>
            </div>
            


    </div>
  )
}

export default Projects