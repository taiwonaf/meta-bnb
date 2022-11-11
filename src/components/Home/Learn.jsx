import Button from '../Button';
import './styles/learn.css';
import LearnImg from './../../assets/learn-more.png';

const Learn = () => {
  return (
    <div className='learn-more'>
        <div className="learnmore-wrapper">
            <div className="learn-left">
                <h2>Metabnb NFTs</h2>
                <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <Button 
                    name="Learn more"
                    bgColor="white"
                    textColor="#A02279"
                />
            </div>
            <div className="learn-right">
                <img src={LearnImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Learn