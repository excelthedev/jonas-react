const Pizza = (props) => {
  return (
    <div className="pizza">
      {/* Here those properties already assigned by the parent MENU are being received here in the PIZZA which is the Child */}
      <img src={props.photoName} alt="pizza spinachi" />

      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Pizza;
