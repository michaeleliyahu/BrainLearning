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
      <b>Output:</b>
      <div style={{ marginTop: '1rem', wordBreak: 'break-word', color: '#222' }}>{output}</div>
    </div>
  );
}

export default OutputBox;
