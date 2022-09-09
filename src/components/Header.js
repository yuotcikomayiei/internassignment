import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
//import Logo from '../assets/img/logo.svg';
import "../index.css";

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='Header'>
          <h1>FictionalR</h1>
        </Link>
        <div className='flex items-center gap-5'>
        <Link to='/'>
          Rent
        </Link>
        <Link to='/'>
          Buy
        </Link>
        <Link to='/'>
          Sell
        </Link>
        </div>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
