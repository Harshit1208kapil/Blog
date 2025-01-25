import React from 'react';

const Header = (props) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'lightgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, fontSize: '24px', color: 'black' }}>Blog Website</h1>

      <button
        onClick={() => props.sethome(!props.home)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {props.home ? 'Go to Blog' : 'Go to Home'}
      </button>
    </div>
  );
};

export default Header;
