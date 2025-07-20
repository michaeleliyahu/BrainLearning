

import React, { useState } from 'react';

function SubjectsTree({ subjects }) {
  const [openCategory, setOpenCategory] = useState(null);
  if (!subjects) return null;
  return (
    <div
      style={{
        margin: '2rem 0',
        maxWidth: 340,
        border: '1px solid #e0e0e0',
        borderRadius: 10,
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        padding: '1.5rem 1rem',
      }}
    >
      <h2 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: '#333' }}>Subjects Tree</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {Object.entries(subjects).map(([category, topics]) => (
          <li key={category} style={{ marginBottom: '0.7rem' }}>
            <div
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              style={{
                fontWeight: 'bold',
                color: openCategory === category ? '#1565c0' : '#4285f4',
                userSelect: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.3rem 0.5rem',
                borderRadius: 6,
                transition: 'background 0.2s',
                background: openCategory === category ? '#e3f2fd' : 'transparent',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#f1f8ff')}
              onMouseOut={e => (e.currentTarget.style.background = openCategory === category ? '#e3f2fd' : 'transparent')}
            >
              <span style={{ fontSize: '1.1rem', marginRight: 8 }}>
                {openCategory === category ? '▼' : '▶'}
              </span>
              {category}
            </div>
            <div
              style={{
                maxHeight: openCategory === category ? 500 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {openCategory === category && (
                <ul style={{ marginLeft: '2.2rem', marginTop: '0.4rem', padding: 0, listStyle: 'none' }}>
                  {topics.map(topic => (
                    <li
                      key={topic}
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: 5,
                        color: '#333',
                        background: '#f5f5f5',
                        marginBottom: 4,
                        cursor: 'pointer',
                        fontSize: '0.98rem',
                        transition: 'background 0.18s',
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#e3f2fd')}
                      onMouseOut={e => (e.currentTarget.style.background = '#ffffffff')}
                      // onClick={() => alert(`Clicked topic: ${topic}`)} // Uncomment to handle topic click
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectsTree;
