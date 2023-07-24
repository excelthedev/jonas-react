// working with the item component which is being rendered in the Packinglist.

const Items = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Items;
