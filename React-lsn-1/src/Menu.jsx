import Pizza from "./Pizza";
import PizzaData from "./Pizzadata";

const Menu = () => {
  const pizzas = PizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Pizza Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {PizzaData.map((pizza) => (
              <Pizza
                // name={pizza.name}
                // ingredients={pizza.ingredients}
                // price={pizza.price}
                // photoName={pizza.photoName}
                pizzaObj={pizza} //tied all the pizza objects to a central object named PizzaObj
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We{"'"} still in the kitchen cooking, please check back later</p>
      )}

      {/* NOT-SO-GOOD WAY OF RENDERING THE ITEMS FROM THE Pizzadata, now we are going to be using the Javascript MAP METHOD  Above. */}

      {/* Using props to pass Data from Parents to Child Component, the MENU here is the Parent component. the PIZZA is the Child component */}
      {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta chesse"
        photoName="../src/assets/pizzas/spinaci.jpg"
        price={10}
      /> */}

      {/* it's important to note the order doesn't really matter, you can place the name, photoName properties anywhere, it doesn't matter */}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="../src/assets/pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
};

export default Menu;
