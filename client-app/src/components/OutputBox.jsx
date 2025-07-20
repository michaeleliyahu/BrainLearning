import React from 'react';

function OutputBox({ output }) {
  if (!output) return null;
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '2rem',
      background: '#fff',
      padding: '1rem',
      borderRadius: '1rem',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 2px 8px rgba(60,64,67,.10)'
    }}>
      <b>תשובה:</b>
      <div style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{output}</div>
    </div>
  );
}

export default OutputBox;
