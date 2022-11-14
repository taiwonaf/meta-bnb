import './styles/card.css';
import RatingImg from './../assets/rating.png';
// import heart from './../assets/heart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Card = ({src}) => {
    const [like, setLike] = useState(false);
  return (
    <div className='card'>
        <div className="card-img" style={{backgroundImage: `url(${src})`}}>
            {/* <img src={heart} alt="" /> */}
            <FontAwesomeIcon icon={faHeart} style={like && {color: "#A02279"}} onClick={() => setLike(prev => !like)} />
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