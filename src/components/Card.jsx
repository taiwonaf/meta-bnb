import './styles/card.css';
import RatingImg from './../assets/rating.png';
import Aise from './../assets/adventure/aise.png';
import heart from './../assets/heart.svg';
import data from './Home/data/adventure';

const Card = ({src}) => {
  return (
    <div className='card'>
        <div className="card-img" style={{backgroundImage: `url(${src})`}}>
            <img src={heart} alt="" />
        </div>
        <div className="card-details">
            <div className="top-detail">
                <div className="name">Desert King</div>
                <div className="price">1MBT per night</div>
            </div>
            <div className="bottom-detail">
                <div className="distance">2345km</div>
                <div className="availability">available for 2 weeks stay</div>
            </div>
            <div className="rating">
                <img src={RatingImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card