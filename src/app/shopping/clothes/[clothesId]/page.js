'use client';

import { useParams } from 'next/navigation';

// Example data - replace with your actual data source or API call
const clothesData = {
  '1': { name: 'T-Shirt', description: 'A comfortable cotton t-shirt', price: '$20' },
  '2': { name: 'Jeans', description: 'Stylish blue jeans', price: '$50' },
  '3': { name: 'Jacket', description: 'Warm winter jacket', price: '$100' },
};

export default function ClothesDetail() {
  const params = useParams();
  const clothesid = params.clothesId;  // Access the dynamic route parameter

  const clothing = clothesData[clothesid];

  if (!clothing) {
    return <p>Clothing item not found.</p>;
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '32px',
      borderRadius: '8px',
      width: '300px',
      margin: '0 auto',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <h1>{clothing.name}</h1>
      <p>{clothing.description}</p>
      <p><strong>{clothing.price}</strong></p>
    </div>
  );
}