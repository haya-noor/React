import React from 'react';
import Sidenote from './sidenoteStyle.jsx';
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <>
      <Sidenote type="notice" title="This is a notice">
        Hello World
      </Sidenote>
      <Sidenote type="success" title="This is success!">
        Yay!
      </Sidenote>
    </>
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);
