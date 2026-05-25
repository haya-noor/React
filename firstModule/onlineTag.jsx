import React from 'react';
import { createRoot } from 'react-dom/client';
import VisuallyHidden from './VisuallyHidden.jsx';

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && (
        <VisuallyHidden> (Online)</VisuallyHidden>
      )}
    </li>
  );
}

function App() {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);