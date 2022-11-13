import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import './layout.css';
import ConnectWallet from './components/ConnectWallet';
import TabMenu from './components/Header/TabMenu';

const Layout = () => {

  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const [openTabMenu, setOpenTabMenu] = useState(false);
  const pathName = useLocation();
  
  useEffect(() => {
    setOpenTabMenu(prev => false)
    return () => {
      setOpenTabMenu(prev => true)
    }
  }, [pathName])
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