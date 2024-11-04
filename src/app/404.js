// app/404.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    alert('The page you are looking for does not exist. Redirecting to the main page.');
    router.push('/'); // Redirect to the main app page
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the main page...</p>
    </div>
  );
}