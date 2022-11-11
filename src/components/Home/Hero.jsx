import React from 'react';
import HeroImg from './../../assets/hero-img.png';
import Search from './Search';
import './styles/hero.css';

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="hero-wrapper">
            <div className="hero-left">
                <h1>
                    Rent a <span>place</span> away from <span>Home</span> in the <span>Metaverse</span>
                </h1>
                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
                <Search />
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero