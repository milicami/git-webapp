import React from 'react'


const Header = ({ title }) => (
    <header>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    </header>
)

export default Header;