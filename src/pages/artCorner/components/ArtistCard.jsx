import image from "../../../assets/images/image.jpg";

const ArtistCard = () => {
  return (
    <div className="Artist-Card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="name">
        <p>Poet, Artist, Picasso</p>
        <h3>Lens</h3>
      </div>
    </div>
  );
};

export default ArtistCard;
