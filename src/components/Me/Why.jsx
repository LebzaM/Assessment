import React from 'react'
import '../Me/Why.css'
import Logo from '../Assets/sovtech.png'

const Why = () => {
  return (
    <div className="section_about">
      
      <div className='container_about'>
        

        <div className='img_container_about'>
        <img src={Logo}  />

        </div>

        <div className='intro_container'>
          <h5>
          I want to join SovTech as a developer so I can be part of a team that is passionate about developing innovative software solutions to complex problems.<br/><br/> I am truly excited about the opportunity to work with cutting-edge technologies and learn from fellow experienced developers.<br/><br/> SovTech's commitment and to delivering high-quality software products and services aligns with my personal values, and I am eager to contribute my skills and knowledge to the company's mission, vission and goals.<br/><br/> Additionally, I believe that SovTech's culture of collaboration, creativity, and continuous learning will provide a supportive and challenging environment that will help me grow as a software developer. 


          </h5>

        </div>
      </div>

  
    </div>
  )
}

export default Why