import Link from 'next/link';

// Example data - replace with your actual data source or API call
const clothesData = [
  { id: '1', name: 'T-Shirt', description: 'Comfortable cotton', price: '$20' },
  { id: '2', name: 'Jeans', description: 'Stylish blue jeans', price: '$50' },
  { id: '3', name: 'Jacket', description: 'Warm winter jacket', price: '$100' },
];

export default function ClothesList() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {clothesData.map((clothing) => (
        <Link href={`/shopping/clothes/${clothing.id}`} key={clothing.id}>
          <div style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
            width: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}>
            <h2>{clothing.name}</h2>
            <p>{clothing.description}</p>
            <p><strong>{clothing.price}</strong></p>
          </div>
        </Link>
      ))}
    </div>
  );
}