import './styles/footer.css';
import WhiteLogo from './../../assets/white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Column from './Column';

const Footer = () => {
  const menuLinks = [
    {
      title: "Community",
      links: [
        {
          link: 'NFT',
          url: "#"
        },
        {
          link: 'Tokens',
          url: "#"
        },
        {
          link: 'Landlords',
          url: "#"
        },
        {
          link: 'Discord',
          url: "#"
        }
      ]
    },
    {
      title: "Places",
      links: [
        {
          link: 'Castle',
          url: "#"
        },
        {
          link: 'Farms',
          url: "#"
        },
        {
          link: 'Beach',
          url: "#"
        },
        {
          link: 'Learn more',
          url: "#"
        }
      ]
    },
    {
      title: "About us",
      links: [
        {
          link: 'Road map',
          url: "#"
        },
        {
          link: 'Creators',
          url: "#"
        },
        {
          link: 'Career',
          url: "#"
        },
        {
          link: 'Contact us',
          url: "#"
        }
      ]
    }
  ]
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="brand-row">
          <div className="logo">
            <img src={WhiteLogo} alt="" />
          </div>
          <div className="social-links">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        {
          menuLinks.map((link, index) => {
            const {title, links} = link;
            return (
              <Column
                title={title}
                links={links}
                key={index}
              />
            )
          })
        }
      </div>
      <div className="footer-bottom">
        <p>© 2022 Metabnb</p>
      </div>
    </footer>
  )
}

export default Footer