import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.querySelector('#root')
);

// status: 'cancel' | 'confirm'
function Button({ status, children }) {
    let themeColor;
  
    if (status === 'cancel') {
      themeColor = 'red';
    } else if (status === 'confirm') {
      themeColor = 'Green';
    } else {
      throw new Error('Unrecognized value');
    }
  
    return (
      <button
        style={{
          border: '2px solid',
          color: themeColor,
          borderColor: themeColor,
          background: 'white',
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        {children}
      </button>
    );
  }

root.render(
  <div>
    <Button status="cancel">Cancel</Button>
    <Button status="confirm">Confirm</Button>
  </div>
);