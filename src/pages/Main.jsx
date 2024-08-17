import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
     
     <Navbar></Navbar>
    

      {/* Outlet for nested routes */}
      <main className="p-4">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
