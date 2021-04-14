function Tiles(props) {
  const { number } = props;
  return (
    <div
      className={(number.addClass ? number.addClass : "") + ` tiles-container`}
    >
      <p>{number.number}</p>
      <p>{number.name}</p>
    </div>
  );
}

export default Tiles;
