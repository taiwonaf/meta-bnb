import './styles/adventure.css';
import Card from './../Card';
import data from './data/adventure';

const Adventure = () => {
  return (
    <div className='adventure-section'>
        <div className="adventure-wrapper">
            <h2>Inspiration for your next adventure</h2>
            <div className="cards">
                {
                    data.map((item, index) => {
                        return(
                            <Card src={item.src} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Adventure