const ArtCard = ({ id, title, text, active, activeHandler }) => {
  const clickHandler = () => {
    activeHandler(id);
  };
  return (
    <div
      onClick={clickHandler}
      className={` ArtCard ${active === id ? "active" : ""}`}
    >
      <div className="number">
        <h1>0{id} .</h1>
        <hr />
      </div>
      <div className="title">
        <h3>{title}</h3>
        <hr />
        {text}
        <button>Discover Now</button>
      </div>
    </div>
  );
};

export default ArtCard;
