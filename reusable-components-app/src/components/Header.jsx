import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'fixed', // Make the header fixed
        top: '0', // Position it at the top
        width: '100%', // Make it take full width
         // Ensure it's above other content
    };

    const headingStyle = {
        margin: '0',
        fontSize: '32px'
    };

    const navStyle = {
        listStyle: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'center'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '10px',
        margin: '0 5px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        backgroundColor: '#555',
    };

    return (
        <header style={headerStyle}>
            <h1 style={headingStyle}>React Practice Application</h1>
            <nav>
                <ul style={navStyle}>
                    <li><Link style={linkStyle} to="/arrayupdate">ArrayUpdate</Link></li>
                    <li><Link style={linkStyle} to="/objectstateupdate">ObjectStateUpdate</Link></li>
                    <li><Link style={linkStyle} to="/axios">Axios</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
