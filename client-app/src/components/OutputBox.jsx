import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function OutputBox({ output }) {
  if (!output) return null;
  const isObject = typeof output === 'object' && output !== null;
  return (
    <div style={{
      textAlign: 'left',
      marginTop: '2rem',
      background: '#fff',
      padding: '1rem',
      borderRadius: '1rem',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 2px 8px rgba(60,64,67,.10)'
    }}>
      <b style={{ display: 'block', marginBottom: '1rem' }}>📘 Output:</b>
      <div style={{ marginTop: '1rem', wordBreak: 'break-word', color: '#222' }}>
        {isObject ? (
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', fontFamily: 'monospace' }}>
            {JSON.stringify(output, null, 2)}
          </pre>
        ) : (
          <ReactMarkdown
            children={output}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                return (
                  <code
                    style={{
                      background: '#f5f5f5',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontFamily: 'monospace'
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              pre({ children }) {
                return (
                  <pre style={{
                    background: '#f5f5f5',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    overflowX: 'auto',
                    fontFamily: 'monospace'
                  }}>
                    {children}
                  </pre>
                );
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

export default OutputBox;
