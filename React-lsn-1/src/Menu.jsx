import Pizza from "./Pizza";

const Menu = () => {
  return (
    <menu className="menu">
      <h2>Our Pizza Menu</h2>
      {/* Using props to pass Data from Parents to Child Component, the MENU here is the Parent component. the PIZZA is the Child component */}
      <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta chesse"
        photoName="../src/assets/pizzas/spinaci.jpg"
        price="$10"
      />

      {/* it's important to note the order doesn't really matter, you can place the name, photoName properties anywhere, it doesn't matter */}
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="../src/assets/pizzas/funghi.jpg"
        price="$12"
      />
    </menu>
  );
};

export default Menu;
