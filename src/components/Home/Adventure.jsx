import './styles/adventure.css';
import Cards from '../Cards';
import data from './data/adventure';

const Adventure = () => {
  return (
    <div className='adventure-section'>
        <div className="adventure-wrapper">
            <h2>Inspiration for your next adventure</h2>
            <Cards data={data} />
        </div>
    </div>
  )
}

export default Adventure