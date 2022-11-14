import { NavLink } from 'react-router-dom';
import './styles/navlink.css';

const Navlinks = ({ name, url}) => {
  return (
    <li>
      <NavLink to={url} >{name}</NavLink>
    </li>
  )
}

export default Navlinks