

import React, { useState, useEffect } from 'react';

import {Button} from '../components'
import { Link } from 'react-router-dom';
import './styles/Header.scss'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EuriDrinkin
            <i className='fa-solid fa-beer-mug-empty' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            
            <li className='nav-item'>
              <Link
                to='/idk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ALGO MAS?
              </Link>
            </li>

            <li>
              <Link
                to='/bug-report'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SEND A BUG
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SEND A BUG</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;