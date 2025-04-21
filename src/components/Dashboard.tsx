import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <main style={{
      flex: 1,
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2>Welcome to the Dashboard!</h2>
      <p>Select a test to begin your practice session.</p>
    </main>
  );
};

export default Dashboard;