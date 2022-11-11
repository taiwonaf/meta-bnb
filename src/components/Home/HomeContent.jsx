import Adventure from './Adventure';
import Brands from './Brands';
import Hero from './Hero';
import Learn from './Learn';
import './styles/homecontent.css';

const HomeContent = () => {
  return (
    <div className='home-content'>
        <Hero />
        <Brands />
        <Adventure />
        <Learn />
    </div>
  )
}

export default HomeContent