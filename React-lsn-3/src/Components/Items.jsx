// working with the item component which is being rendered in the Packinglist.

const Items = ({ item }) => {
  const { quantity, description, packed } = item;
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Items;
