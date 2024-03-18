import React from 'react';
import ban from './img/banner.jpg';
import './css/Marquee.css'
import './css/Home.css'; 
import imgb from './img/bandown-2.jpeg'
import about from './img/iphone__1_-removebg.png'
import abimg from './img/aboutpage.jpeg'
import { NavLink } from 'react-router-dom';

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
     <p style={{fontSize:'20px',fontFamily:'Arial',fontWeight:'bolder'}}>At VMS Mobile, we're passionate about delivering cutting-edge technology to our customers at affordable prices. With a focus on innovation and customer satisfaction, we strive to bring the latest advancements in mobile technology within reach of every individual. Our extensive range of smartphones, tablets, and accessories caters to diverse needs and preferences, ensuring that everyone can find the perfect device to stay connected and productive. Backed by a team of dedicated professionals and a commitment to quality, reliability, and exceptional service, VMS Mobile is your trusted partner in the ever-evolving world of mobile technology."</p>
     <div><img src={imgb} alt='back'style={{width:'100%',height:'700px'}}/></div>
      <section className='flex-about'> 
      <div className='flex-about1'>
      <h1>Love the Power<br></br><br></br>
          Love the Price
         
      </h1>
      <NavLink style={{fontSize:'30px',color:'blue',textDecoration:'none'}} to={'./products'}>BuyNow</NavLink>
      
      </div>
      <div className='flex-about2'>
      <img src={about} alt='about' style={{width:'400px',height:'600px'}}/>
      </div>
      </section>
      <section class="contact" id="contact">
            <h2 class="titleText"><span>C</span>ontact Us</h2>

        <div class="box">
            <div><h4>Send Message</h4>
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
                <input style={{backgroundColor:'lightblue',color:'white',borderRadius:'5px'}} type="submit" placeholder="Sumbit"/>
            </div></div>
            <div>
                <img src={abimg} alt='about'/>
            </div>

            
        </div>
    </section>
        <div class="Copyrighttext">
            <footer>©️Copyright 2023 created by Jusvanth</footer>
        </div>

      
    </div>
  );
};
