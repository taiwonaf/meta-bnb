import React from 'react'
import Cards from '../Cards';
import placesData from './data/places';
import './styles/placescontent.css';
import Filters from './Filters';

const PlacesContent = () => {
  return (
    <div className='placescontent'>
        <div className="places-content-wrapper">
            <Filters />
            <Cards
                data={placesData}
            />
        </div>
    </div>
  )
}

export default PlacesContent