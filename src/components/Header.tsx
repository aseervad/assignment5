import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      background: '#2563eb',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>IELTS Speaking Test Platform</h1>
      <nav>
        <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Home</a> | 
        <a href="#" style={{color: 'white', textDecoration: 'none', margin: '0 10px'}}>Dashboard</a>
      </nav>
    </header>
  );
};

export default Header;