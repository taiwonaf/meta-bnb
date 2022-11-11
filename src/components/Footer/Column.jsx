import './styles/column.css';

const Column = ({title, links}) => {
  return (
    <div className="footer-column">
        <h5>{title}</h5>
        <ul>
            {
                links.map((items, index) => {
                    const {link, url } = items;
                    return (
                        <a href={url} key={index}>{link}</a>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Column