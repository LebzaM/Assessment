import React, {useState} from 'react';
import '../Navbar/Navbar.css'
import About from '../About/About';
import Header from '../Header/Header';


const Navbar = () => {
  
 
  return (
    <section className='section_navbar'>
      
      <div className='container_navbar'>
        <div className='links'>
        {/* <div src='logo'>
          <img src='' alt='SovTech'/>
        </div> */}
        
          <div className='list'>
            <ul>Home</ul>
            

          </div>

        </div>
        
        

      </div>
    </section>
  )
}

export default Navbar