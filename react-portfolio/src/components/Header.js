import React from 'react';
import NavTabs from './NavTabs';

export default function Header() {
    return (
        <header>
            <div class="logo">
                <img src="./assets/images/logo-image.png" alt="logo" />
            </div>
            <NavTabs />
        </header>
    );
}