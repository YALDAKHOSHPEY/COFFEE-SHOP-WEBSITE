export default function Menu() {
    const menuItems = [
      { category: 'Coffee', items: [{ name: 'Espresso', price: '$3' }, { name: 'Latte', price: '$4.5' }, { name: 'Cappuccino', price: '$4' }] },
      { category: 'Tea', items: [{ name: 'Green Tea', price: '$2.5' }, { name: 'Black Tea', price: '$2' }] },
      { category: 'Pastries', items: [{ name: 'Croissant', price: '$3' }, { name: 'Muffin', price: '$2.5' }] },
    ];
  
    return (
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        {menuItems.map((cat) => (
          <div key={cat.category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-brown-800)]">{cat.category}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <li key={item.name} className="bg-white p-4 rounded shadow flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-bold text-[var(--color-yellow-600)]">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }