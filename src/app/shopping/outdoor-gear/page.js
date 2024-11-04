'use client';
import { useRouter } from "next/navigation";

export default function OutdoorGear() {
  const router = useRouter();
  const gotomainPage = () => {
    router.push('/shopping');
  }
    return (<div>
      <h1>Outdoor Gear Category</h1>
      <button onClick={gotomainPage}>Go to Main Page</button>
      </div>);
  }