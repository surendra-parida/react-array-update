import React from 'react';

const Footer = () => {
    const footerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
      };
      
      const textStyle = {
        margin: '0',
      };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 React Practice Application. All rights reserved.</p>
    </footer>
  );
};



export default Footer;
