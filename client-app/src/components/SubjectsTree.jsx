
import React, { useState } from 'react';

function SubjectsTree({ subjects }) {
  const [openCategory, setOpenCategory] = useState(null);
  if (!subjects) return null;
  return (
    <div style={{ margin: '2rem 0', maxWidth: 300 }}>
      <h2>Subjects Tree</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(subjects).map(([category, topics]) => (
          <li key={category} style={{ marginBottom: '1rem', cursor: 'pointer' }}>
            <div
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              style={{ fontWeight: 'bold', color: '#4285f4', userSelect: 'none' }}
            >
              {category} {openCategory === category ? '▼' : '▶'}
            </div>
            {openCategory === category && (
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                {topics.map(topic => (
                  <li key={topic} style={{ padding: '0.2rem 0' }}>{topic}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectsTree;
