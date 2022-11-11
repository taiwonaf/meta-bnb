import NavLink from './NavLink';
import './styles/Navbar.css';
import Button from '../Button';
import Logo from './../../assets/logo.png';

const Header = () => {
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
                  <NavLink
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
              name="Connect wallet"
              bgColor="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
              textColor="white"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header