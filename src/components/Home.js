import React from 'react';
import ban from './img/banner.jpg';

import neoImage from './img/neo.jpg';
import './css/Home.css'; 
import { Link, NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container">
      <section>
        <header className="home-header">
          <img src={ban} alt="Banner" className="banner-img" />
          <div className="text-overlay">
            <h1>Empowering your world <br></br>one tap at a time</h1>
            <p>Discover amazing content here!</p>
          </div>
        </header>
      </section>      
      <section>
        <div className='home-body'>
          <h1>New Arrivals...</h1>
           <div className='home-neo'><img src={neoImage} alt='neo' className='hover-effect'/>
           <div className='home-neo-body'><h1>I Q O O 12 5G<br></br>Snapdragon<sup>R</sup> 8 Gen 3</h1>
           <NavLink className='li' to='/'>Shop Now</NavLink>
           </div>
           </div>
        </div>
      </section>
      <section>
        <div className='home-body'>
           <div className='home-neo'><img src={neoImage} alt='neo' className='hover-effect'/>
           <div className='home-neo-body'><h1>I Q O O 12 5G<br></br>Snapdragon<sup>R</sup> 8 Gen 3</h1>
           <NavLink className='li' to='/'>Shop Now</NavLink>
           </div>
           </div>
        </div>
        
      </section>
      <section>
        <div className='home-body'>
           <div className='home-neo'><img src={neoImage} alt='neo' className='hover-effect'/>
           <div className='home-neo-body'><h1>I Q O O 12 5G<br></br>Snapdragon<sup>R</sup> 8 Gen 3</h1>
           <NavLink className='li' to='/'>Shop Now</NavLink>
           </div>
           </div>
        </div>
        
      </section>
    </div>
  );
};
