import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
        <div class="logo">
            <img src="../assets/images/logo-image.png" alt="logo" />
        </div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
            Home
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#blog"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            >
            Blog
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
            </a>
        </li>
        </ul>
    </header>
  );
}

export default NavTabs;
