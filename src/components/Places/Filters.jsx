import React from 'react';
import Settings from './../../assets/settings.svg';
import './styles/filters.css';

const Filters = () => {
    const filterItems = [
        {name: 'Restaurant',},
        {name: 'cottage',},
        {name: 'Castle',},
        {name: 'Fantast city',},
        {name: 'Beach',},
        {name: 'Carbins',},
        {name: 'Off-grid',},
        {name: 'Farm',},
    ]
  return (
    <div className='filters'>
        <ul>
            {
                filterItems.map((filter, index) => {
                    const {name} = filter;
                    return (
                        <li key={index}>{name}</li>
                    )
                })
            }
        </ul>
        <div className="sort">
            <span>Location</span>
            <img src={Settings} alt="" />
        </div>
    </div>
  )
}

export default Filters