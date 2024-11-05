'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem('username'); 
    const email = localStorage.getItem('email');
    if (!username || !email) {
      router.push('/login');
    }else{
      router.push('/');
    }
  }, [router]);
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}