import React from 'react';
import PropTypes from 'prop-types';


const Header = () => (
    <header>
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center">React Users</a>
            </div>
        </nav>
    </header>
)

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Header.defaultProps = {
    title: "My App"
}

export { Header };