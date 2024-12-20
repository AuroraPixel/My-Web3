import React from 'react';

const TreeNode = ({ label, children }) => {
  const hasChildren = React.Children.count(children) > 0;
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '25px',
      padding: '10px'
    }}>
      <div style={{
        padding: '12px 24px',
        border: '2px solid #a78bfa',
        borderRadius: '12px',
        background: '#f5f3ff',
        boxShadow: '0 2px 4px rgba(167, 139, 250, 0.1)',
        color: '#6d28d9',
        fontWeight: '500',
        fontSize: '0.9rem',
        textAlign: 'center',
        whiteSpace: 'pre-line',
        minWidth: '120px'
      }}>
        {label}
      </div>
      {hasChildren && (
        <div style={{ 
          display: 'flex', 
          gap: '60px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            width: '2px',
            height: '25px',
            background: '#d8b4fe',
            transform: 'translateX(-50%)'
          }} />
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '25%',
            right: '25%',
            height: '2px',
            background: '#d8b4fe'
          }} />
          {React.Children.map(children, (child) => (
            <div style={{ position: 'relative' }}>
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
