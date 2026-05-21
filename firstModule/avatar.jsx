import React from 'react';
import { createRoot } from 'react-dom/client';
import Avatar from './avatarData.jsx';


const data = [
    {
      id: 'avatar1',
      alt: 'person with curly hair and a black T-shirt',
    },
    {
      id: 'avatar2',
      alt: 'person wearing a hijab and glasses',
    },
    {
      id: 'avatar3',
      alt: 'person with short hair wearing a blue hoodie',
    },
    {
      id: 'avatar4',
      alt: 'person with a pink mohawk and a raised eyebrow',
    },
  ];


function App() {
  return (
    <div className="avatar-set">
        {data.map(({id, alt}) => (
             <Avatar
             key={id}
             src={`/firstModule/Assets/${id}.png`}
             alt={alt}
         />
        ))}
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);