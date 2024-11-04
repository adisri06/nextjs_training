'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  // Here we can define valid paths for redirection
  useEffect(() => {
    // Ensure that the code runs only on the client-side
    if (typeof window !== 'undefined') {
      const validPaths = [
        '/',
        '/shopping',
        '/shopping/home-appliances',
        '/shopping/beauty-products',
        '/shopping/outdoor-gear'
      ];

      const pathname = window.location.pathname;

      // If the current path is not valid, redirect to the custom 404 page
      if (!validPaths.includes(pathname)) {
        router.push('/404'); // Redirect to the custom 404 page
      }
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to our stores</h1>
      <Link href="/shopping">Go to Shopping</Link>
    </div>
  );
}
