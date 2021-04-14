function Tiles(props) {
  const { number, name } = props;
  return (
    <div className="tiles-container">
      <p>{number}</p>
      <p>{name}</p>
    </div>
  );
}

export default Tiles;
