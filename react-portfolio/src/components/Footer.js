import React from 'react';

export default function Footer({ currentPage }) {
    return (
        <footer style={currentPage !== 'Portfolio' ? {position:'absolute'} : {position:'relative'}}>
            <p class="made-by">Made with ❤ by me</p>
            <p>© 2021 All Rights Reserved</p>
        </footer>
    );
}