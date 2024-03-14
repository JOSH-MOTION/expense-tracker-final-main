import React from 'react';
import logo from './img/logo.png'; // Replace with your logo image
import './Loading.css'; // Create a CSS file for animations

function Loading() {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Make the container full viewport height
   
    background: 'linear-gradient(90deg, rgba(0,18,36,1) 0%, 180deg,#ffb347  35%, rgba(0,212,255,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  
  };

  const logoStyle = {
    width: '300px', // Set the desired width
    height: 'auto', // Automatically adjust the height to maintain aspect ratio
    animation: 'spin 3s linear infinite', // Add the rotating animation
  };

  return (
    <div className="loading" style={containerStyle}>
      <img src={logo} alt="Loading Logo" style={logoStyle} />
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;
