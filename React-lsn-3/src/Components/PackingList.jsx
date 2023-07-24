import Items from "./Items";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Oraimo Power Bank", quantity: 1, packed: false },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
