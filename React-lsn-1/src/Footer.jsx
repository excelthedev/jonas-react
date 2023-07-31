import Order from "./Order";

const Footer = () => {
  const time = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const openSetTime = time >= openHour && time <= closeHour;

  // if (!openSetTime) return <p>CLOSED</p>;
  return (
    <footer className="footer">
      {" "}
      {openSetTime ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We{"'"}re happy to welcome you between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
};

export default Footer;
