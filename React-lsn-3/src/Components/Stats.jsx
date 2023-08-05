const Stats = ({ item }) => {
  if (!item.length)
    return (
      <p className="stats">
        <em>Satrt adding some items to your packing list</em>{" "}
      </p>
    );

  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {/* using derived states to calculate the no of items */}

      <em>
        {percentage === 100
          ? "You're packed and ready to go!!"
          : ` 💼 You have ${numItems} items on your list, and you've only  packed
        ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
};

export default Stats;
