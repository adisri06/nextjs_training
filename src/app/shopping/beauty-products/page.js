'use client'; 
import { useRouter } from "next/navigation";
export default function BeautyProducts() {
  const router = useRouter();
  const gotomainPage = () => {
    router.push('/shopping');     
  }
  return (
    <div>
      <h1>Beauty Products Category</h1>
      <button onClick={gotomainPage}>Go to Main Page</button>
    </div>

  )
  }