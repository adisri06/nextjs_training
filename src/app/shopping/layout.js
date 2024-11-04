'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from '../shopping/NavButtons.module.css';

export default function ShoppingLayout({ children }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    router.forward();
  };

  return (
    <div>
      <h1>Shopping Categories</h1>
      <nav className={styles.navButtons}>
        <Link href='/shopping/home-appliances'> Home Appliances </Link>
        <Link href='/shopping/beauty-products'> Beauty Products </Link>
        <Link href='/shopping/outdoor-gear'> Outdoor Gear </Link>
        <div className={styles.buttonContainer}>
          <button onClick={goBack} className={styles.button}>
            Back to Previous Page
          </button>
          <button onClick={goForward} className={styles.button}>
            Forward to Next Page
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
}