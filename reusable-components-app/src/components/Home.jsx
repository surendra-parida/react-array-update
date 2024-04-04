import React from "react";

const Home = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "0 20px",
    textAlign: "center",
    marginTop: "150px",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome</h2>
      <p style={paragraphStyle}>
        Click the navigation button to navigate to all components.
      </p>
    </div>
  );
};

export default Home;
