'use client'; 

import { useRouter, usePathname } from 'next/navigation';

export default function HomeAppliances() {
  const router = useRouter();
  const pathname = usePathname();
  const parentPath = '/' + pathname.split('/').slice(0,-2).join('/');
  const goToMainPage = () => {
    router.push('/shopping');
  };
  const gotoParentPage = () => {
    router.push(parentPath);
  };

  return (
    <div>
      <h1>Home Appliances Category</h1>
      <button onClick={goToMainPage}>Back to Shopping Page</button>
      <button onClick={gotoParentPage}>Go to Parent Page</button>
    </div>
  );
}