function Tiles(props) {
  const { number } = props;
  return (
    <div className={` tiles-container`}>
      <p>{number.number}</p>
      <p>{number.name}</p>
    </div>
  );
}

export default Tiles;
