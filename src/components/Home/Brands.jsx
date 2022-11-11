import React from 'react';
import Mbtoken from './../../assets/mb-token.png';
import Metamask from './../../assets/metamask.png';
import Opensea from './../../assets/opensea.png';
import './styles/brands.css';


const Brands = () => {
    const brands = [
        {
            img: Mbtoken
        },
        {
            img: Metamask
        },
        {
            img: Opensea
        }
    ]
  return (
    <div className='brands'>
        <div className="brands-wrapper">
            {
                brands.map((brand, index) => {
                    return(<img src={brand?.img} key={index} alt='' />)
                })
            }
        </div>
    </div>
  )
}

export default Brands