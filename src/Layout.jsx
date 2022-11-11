import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

import './layout.css';
import ConnectWallet from './components/ConnectWallet';

const Layout = () => {

  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  
  return (
    <div className="layout">
      {
        openConnectWallet && <ConnectWallet closewallet={setOpenConnectWallet} />
      }
      <header>
        <Navbar openwallet={setOpenConnectWallet}/>
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout