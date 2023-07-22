const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* Here those properties already assigned by the parent MENU are being received here in the PIZZA which is the Child */}
      <img src={pizzaObj.photoName} alt="pizza spinachi" />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
