import React from 'react'

const Footer = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'lightgrey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    }}>
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
