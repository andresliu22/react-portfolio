import React from 'react';
import '../styles/Style.css';
import logo from '../assets/images/logo-image.png';
import resume from '../assets/resume/resume_andresliu.pdf';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
        <div class="logo">
            <img src={logo} alt="logo" />
        </div>
        <nav>
        <ul className="nav">
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
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#skills"
                onClick={() => handlePageChange('Skills')}
                className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
                >
                Skills
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
            <li className="nav-item">
                <a
                href={resume} target="_blank" rel="noreferrer"
                className='nav-link'
                >
                Resume
                </a>
            </li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;
