'use client';

import { useRouter } from 'next/navigation';

// app/(items)/layout.js
export default function ItemsLayout({ children }) {
  const router = useRouter();

  return (
    <div>
      <h1>Items Section</h1>
      <nav>
        <a href="/beauty">Beauty Items</a> | 
        <a href="/grocery">Grocery Items</a>
      </nav>
      {children}
    </div>
  );
}
