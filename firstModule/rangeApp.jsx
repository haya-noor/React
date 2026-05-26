import React from 'react';
import { createRoot } from 'react-dom/client';
import Graph from './rangeGraph.jsx';

function App() {
  return (
    <Graph
      from={0}
      to={40}
    />
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);