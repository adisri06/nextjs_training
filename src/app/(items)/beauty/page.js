export default function Beauty() {
    const beautyItems = ["Lipstick", "Foundation", "Perfume"];
    
    return (
      <div>
        <h2>Beauty Items</h2>
        <ul>
          {beautyItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }