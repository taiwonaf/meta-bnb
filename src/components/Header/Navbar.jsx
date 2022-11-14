import Navlinks from './Navlinks';
import './styles/Navbar.css';
import Button from '../Button';
import Logo from './../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';


const Header = ({openwallet, openTabMenu}) => {
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
      url: '/nfts'
    },
    {
      name: 'Community',
      url: '/community'
    }
  ]

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-items">
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
          <div className="nav-btn">
            <Button
              click={openwallet}
              name="Connect wallet"
              bgColor="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
              textColor="white"
            />
          </div>
        </div>
        <div className="hamburger" onClick={() => openTabMenu(prev => true)}>
          <FontAwesomeIcon icon={faHamburger} size="xl" />
        </div>
      </div>
    </nav>
  )
}

export default Header