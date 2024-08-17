import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { user, logOut, signInByGoogle } = useContext(AuthContext);

   const handleLogout =()=>{
    logOut();
   }


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">hjh</a>
            </div>
            {
                user ? <div className="flex-none gap-2">
                    
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                   
                                </a>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </ul>
                    </div>
                </div> :
                    <div className="flex gap-4 text-xl">
                        <Link to="/register" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                            Register
                        </Link>
                        <Link to="/login" className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                            Login
                        </Link>
                    </div>


            }

        </div>
    );
};

export default Navbar;
