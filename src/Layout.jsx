import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

import './layout.css';
import ConnectWallet from './components/ConnectWallet';
import TabMenu from './components/Header/TabMenu';

const Layout = () => {

  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const [openTabMenu, setOpenTabMenu] = useState(false);
  
  return (
    <div className="layout">
      {
        openConnectWallet && <ConnectWallet closewallet={setOpenConnectWallet} closeTabMenu={setOpenTabMenu}/>
      }
      {
        openTabMenu && <TabMenu closeTabMenu={setOpenTabMenu} openWallet={setOpenConnectWallet} />
      }
      <header>
        <Navbar openwallet={setOpenConnectWallet} openTabMenu={setOpenTabMenu}/>
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout