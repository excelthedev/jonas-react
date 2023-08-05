// working with the item component which is being rendered in the Packinglist.

const Items = ({ item, onDeleteItem, onToggleItem }) => {
  const { quantity, description, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Items;
