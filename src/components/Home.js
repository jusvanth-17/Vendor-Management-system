import React from 'react';
import ban from './img/banner.jpg';
import './css/Marquee.css'
import './css/Home.css'; 
import imgb from './img/bandown-2.jpeg'
import about from './img/iphone__1_-removebg.png'

export const Home = () => {
  return (
    <div className="container">
        <header className="home-header">
          <img src={ban} alt="Banner" className="banner-img" />
          <div className="text-overlay">
            <h1>Empowering your world <br></br>one tap at a time</h1>
            <p>Discover amazing content here!</p>
          </div>
        </header>
     <h2 style={{textAlign:'center',color:'black',fontSize:'30px'}}>About Us</h2>
     <div><img src={imgb} alt='back'style={{width:'100%',height:'500px'}}/></div>
      <section className='flex-about'> 
      <div className='flex-about1'>
      <h1>Love the Power<br></br><br></br>
          Love the Price
      </h1>
      
      </div>
      <div className='flex-about2'>
      <img src={about} alt='about' style={{width:'400px',height:'600px'}}/>
      </div>
      </section>
      <section class="contact" id="contact">
            <h2 class="titleText"><span>C</span>ontact Us</h2>

        <div class="box">
            <h4>Send Message</h4>
            <div class="input">
                <input type="text" placeholder="Name"/>
            </div>
            <div class="input">
                <input type="text" placeholder="Email"/>
            </div>
            <div class="input1">
                <textarea placeholder="message"></textarea>
             </div>
             <div class="input">
                <input type="submit" placeholder="Sumbit"/>
            </div>
        </div>
    </section>
        <div class="Copyrighttext">
            <footer>©️Copyright 2023 created by Jusvanth</footer>
        </div>

      
    </div>
  );
};
