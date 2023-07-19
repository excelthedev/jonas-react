const Footer = () => {
  const time = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;

  const openSetTime =
    time >= openHour && time <= closeHour
      ? "We're currently open"
      : " We're closed at the moment, come back later !";

  console.log(openSetTime);

  return <footer>{openSetTime}</footer>;
};

export default Footer;
