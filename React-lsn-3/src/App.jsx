import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

const App = () => {
  // lifting states , this state was formally in the form, but we lifted it and put it into the parent
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      {/* passing the handleadditems function to the child "form" as a child using props*/}
      <Form onAddItems={handleAddItems} />
      {/* passing the items to the child "packinglist" as a child using props*/}
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearItem={handleClearItems}
      />
      <Stats item={items} />
    </div>
  );
};

export default App;
