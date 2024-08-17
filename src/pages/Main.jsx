import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <div>
     
     <Navbar></Navbar>
    

      {/* Outlet for nested routes */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
