import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles/connectwallet.css';
import { useEffect } from 'react';

const ConnectWallet = ({closewallet, closeTabMenu}) => {
    const wallets = [
        {
          name: 'Metamask',
          icon: '/metamask.svg'
        },
        {
          name: 'WallectConnect',
          icon: '/walletconnect.svg'
        }
      ]
      useEffect(() => {
        closeTabMenu(prev => false)
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll'
        }
      })
  return (
    <div className="connect-wallet">
        <div className="back" onClick={() => closewallet(false)}></div>
        <div className="wallets-container">
          <div className="wallet-container-top">
            <span>connect wallet</span>
            <div className="close-wallets" onClick={() => closewallet(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <div className="wallet-container-bottom">
            <p>Choose your preferred wallet</p>
            <div className="wallets">
              {
                wallets.map((wallet, index) => {
                  const {name, icon} = wallet;
                  return(
                    <div className='wallet' key={index}>
                      <div className="wallet-details">
                        <img src={icon} alt="" />
                        {name}
                      </div>
                      <FontAwesomeIcon icon={faGreaterThan} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default ConnectWallet