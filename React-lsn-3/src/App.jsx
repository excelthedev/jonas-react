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
  return (
    <div className="app">
      <Logo />
      {/* passing the handleadditems function to the child "form" as a child using props*/}
      <Form onAddItems={handleAddItems} />
      {/* passing the items to the child "packinglist" as a child using props*/}
      <PackingList item={items} />
      <Stats />
    </div>
  );
};

export default App;
