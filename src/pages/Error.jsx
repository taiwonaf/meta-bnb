import { NavLink } from "react-router-dom";
import './styles/error.css';

const Error = () => {
  return (
    <div className='error'>
        <div className="error-wrapper">
            <h1>Error 404 Page cannot be found</h1>
            <p>Navigate to </p>
            <NavLink to='/'>Home</NavLink>
        </div>
    </div>
  )
}

export default Error