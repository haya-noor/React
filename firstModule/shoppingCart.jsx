import React from 'react';
import { createRoot } from 'react-dom/client';
import CartTable from './shoppingCartTable.jsx';

const items = [
  {
    id: 'astro-pup',
    imageSrc: '/firstModule/Assets/astro-pup.png',
    imageAlt: 'Astro pup toy',
    title: 'Astro Pup',
    price: 15.99,
    inStock: true,
  },
  {
    id: 'canopener',
    imageSrc: '/firstModule/Assets/canopener.png',
    imageAlt: 'Can opener',
    title: 'Can Opener',
    price: 8.99,
    inStock: true,
  },
  {
    id: 'hellokitty',
    imageSrc: '/firstModule/Assets/hellokitty.png',
    imageAlt: 'Hello Kitty item',
    title: 'Hello Kitty',
    price: 12.5,
    inStock: false,
  },
  {
    id: 'unicornbackpack',
    imageSrc: '/firstModule/Assets/unicornbackpack.png',
    imageAlt: 'Unicorn backpack',
    title: 'Unicorn Backpack',
    price: 24.99,
    inStock: false,
  },
];

function App() {
  const inStockItems = items.filter((item) => item.inStock);
  const outOfStockItems = items.filter((item) => !item.inStock);

  return (
    <>
      <h2>Shopping cart</h2>
      <CartTable items={inStockItems} />

      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <CartTable items={outOfStockItems} />
    </>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);