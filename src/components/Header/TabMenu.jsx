import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Navlinks from './Navlinks';
import './styles/tabmenu.css';
import Button from '../Button';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TabMenu = ({closeTabMenu, openWallet}) => {

  const navLinks = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Place to stay',
      url: 'places'
    },
    {
      name: 'NFTs',
      url: '#'
    },
    {
      name: 'Community',
      url: '#'
    }
  ]
  
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
        document.body.style.overflowY = 'scroll'
    }
  }, []);
  return (
    <div className='tab-menu'>
      <div className="tab-mneu-bg" onClick={() => closeTabMenu(prev => false)}>
      </div>
      <div className="tab-links">
        <div className="tab-menu-close" onClick={() => closeTabMenu(prev => false)} >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul>
          {
            navLinks.map((link, index) => {
              const {name, url} = link;
              return (
                <Navlinks
                  name={name}
                  url={url}
                  key={index}
                />
              )
            })
          }
        </ul>
        <Button
          click={openWallet}
          name="Connect wallet"
          bgColor="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
          textColor="white"
        />
      </div>
    </div>
  )
}

export default TabMenu