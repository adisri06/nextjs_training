'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {

  // Here we can define valid paths for redirection
  

  return (
    <div>
      <h1>Welcome to our stores</h1>
      <Link href="/shopping">Go to Shopping</Link>
    </div>
  );
}
