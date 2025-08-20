export function Products() {
  const products = [
    { id: 1, name: "🍎 Apple", category: "Fruit" },
    { id: 2, name: "🍌 Banana", category: "Fruit" },
    { id: 3, name: "🍇 Grapes", category: "Fruit" },
    { id: 4, name: "🍊 Orange", category: "Fruit" },
    { id: 5, name: "🥝 Kiwi", category: "Fruit" },
    { id: 6, name: "🥕 Carrot", category: "Vegetable" },
    { id: 7, name: "🥦 Broccoli", category: "Vegetable" },
    { id: 8, name: "🌽 Corn", category: "Vegetable" },
    { id: 9, name: "🥔 Potato", category: "Vegetable" },
    { id: 10, name: "🍅 Tomato", category: "Vegetable" },
    { id: 11, name: "🍓 Strawberry", category: "Fruit" },
    { id: 12, name: "🥬 Lettuce", category: "Vegetable" },
    { id: 13, name: "🫑 Capsicum", category: "Vegetable" },
    { id: 14, name: "🍍 Pineapple", category: "Fruit" },
    { id: 15, name: "🧄 Garlic", category: "Vegetable" },
  ];
  return (
    <div>
      {products.map((product) => {
        <Items name={product.name} />;
      })}
    </div>
  );
}

function Items({ name }) {
  return (
    <div>
      <p>{name}</p>
      <button>Add</button>
    </div>
  );
}
