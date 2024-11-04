// app/(items)/grocery/page.js
export default function Grocery() {
  const groceryItems = ["Apples", "Bananas", "Bread"];
  
  return (
    <div>
      <h2>Grocery Items</h2>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}