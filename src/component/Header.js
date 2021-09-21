import React from 'react';

function Header() {
    return(
        <header className="header">
            <div className="header__wrapper">
                <p className="header__app-name">Recipe <span className="header__app-name_accent">Saver</span></p>
                <a className="header__link" href="https://mentalcaries.github.io/code-jam-july-landing/index.html">About the Developer</a>
            </div>
        </header>
    )
}

export default Header;