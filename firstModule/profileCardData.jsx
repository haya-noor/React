import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileCard from './profileCard';

const userProfiles = [
  {
    id: 'penelope-june-p1oer6',
    imageSrc: '/firstModule/Assets/sparklycat.png',
    imageAlt: 'A cat with illustrated groovy glasses and sparkles/rainbows',
    name: 'Penelope “bric-a-brac” June',
    joinDate: 'January 21st, 2022',
    badges: [
      {
        slug: 'ping-pong',
        label: '🏓  Athletic',
      },
      {
        slug: 'photographer',
        label: '📸 Photographer',
      },
      {
        slug: 'olympic-medalist',
        label: '🏅 Olympic Medalist',
      },
    ]
  },
  {
    id: 'baron-montgomerie-9si39d',
    imageSrc: '/firstModule/Assets/fancycat.png',
    imageAlt: 'A very distinguished gentleman cat, with top hat and monocle',
    name: 'Baron Montgomerie of Eglinton III',
    joinDate: 'August 3rd, 1924',
    badges: []
  }
]

function App() {
  return (
    <main className="app">
      {userProfiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      ))}
    </main>
  );
}

const root = createRoot(document.querySelector('#root'))
root.render(< App/>)