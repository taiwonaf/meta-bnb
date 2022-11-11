import Card from './Card';
import './styles/cards.css';

const Cards = ({data}) => {
  return (
    <div className="cards">
        {
            data?.map((item, index) => {
                return(
                    <Card src={item.src} key={index} />
                )
            })
        }
    </div>
  )
}

export default Cards