import { Link } from 'react-router-dom';
import './styles/navlink.css';

const Navlinks = ({ name, url}) => {
  return (
    <li>
      <Link to={url} >{name}</Link>
    </li>
  )
}

export default Navlinks