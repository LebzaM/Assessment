import React, { Component, useRef, useEffect } from 'react'
import '../Header/Header.css'
import Navbar from '../Navbar/Navbar'
import Skills from '../Assets/skills.png'
import Typed from 'typed.js';

const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('scroll');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Welcome</i>', '<i>My Name is</i>', '<i>Olebogeng</i>'],
      typeSpeed: 50,
      loop: true,
      loopCount: 3,
      showCursor: false,
      fadeOut: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="section_header">
      <Navbar />
      <div className='container_header'>
        <div className='title_container'>
          <h1 ref={el}>
          
            {/* <Typical 
            loop={7}
            wrapper='h1'
            steps={[
              'Welcome', 2000,
              'My Name Is', 2000,
              'Olebogeng', 2000,
            ]}
            /> */}


            {/* limit the loop instead of using infinty */}

          </h1>

          <h2>
            Junior Software Developer 
          </h2>

          <button className='button' onClick={handleClickScroll}>Get To Know Me</button>

        </div>

        <div className='img_container'>
          <img src={Skills} alt='Skills'/>
            
        </div>
        
      </div>
      <div  id='scroll'/> {/* just to demonstrate scroll*/}
      

  
    </div>
  )
}

export default Header