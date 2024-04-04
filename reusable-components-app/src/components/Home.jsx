import React from 'react';

const Home = () => {
    const containerStyle = {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0 20px',
        textAlign: 'center',
        marginTop: '150px'
      };
      
      const paragraphStyle = {
        lineHeight: '1.6',
      };

  return (
    <div style={containerStyle}>
      <h2>Welcome</h2>
      {/* <p style={paragraphStyle}></p> */}
      <p style={paragraphStyle}>Nulla quis leo sit amet urna eleifend tristique sed nec dolor. Curabitur eleifend purus nec nisi vehicula, vitae vestibulum risus pharetra. Fusce non justo quis turpis ullamcorper fringilla.</p>
    </div>
  );
};



export default Home;
