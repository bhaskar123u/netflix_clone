import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

  const { user, logOut } = UserAuth();
  // console.log(user.email);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex text-white z-[100] w-full absolute text-center justify-between p-3 cursor-pointer">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          
          <button onClick={handleLogOut} className="bg-red-600 p-6 py-2 rounded text-white">
            Logout
          </button>
          
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 p-6 py-2 rounded text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;