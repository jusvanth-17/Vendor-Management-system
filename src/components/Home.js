import React from 'react';
import ban from './img/banner.jpg';
import sam from './img/samsung.png'
import ip from './img/iphone.png'
import neoImage from './img/neo.jpg';
import './css/Home.css'; 
import { Link, NavLink } from 'react-router-dom';

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
   
      <section>
        <div className='home-body'>
          <h1>New Arrivals...</h1>
          <h1>IQOO</h1>
           <div className='home-neo'><img src={neoImage} alt='neo' className='hover-effect'/>
           <div className='home-neo-body'><h1>I Q O O 12 5G<br></br>Snapdragon<sup>R</sup> 8 Gen 3</h1>
           <NavLink className='li' to='/'>Shop Now</NavLink>
           </div>
           </div>
        </div>
      </section>
      <br></br><br></br>   <br></br><br></br>
      <section className='flex'>
        <div className='home-body'>
        <h1>Samsung</h1>
           <div className='home-sam'><img src={sam} alt='neo' className='hover-ip'/>
           </div>
        </div>
        <div className='home-body'>
        <h1>iphone</h1>
           <div className='home-ip'><img src={ip} alt='neo' className='hover-ip'/>
           </div>
        </div>
        
        
      </section>
      <br></br><br></br>   <br></br><br></br>

      
    </div>
  );
};
