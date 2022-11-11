import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout