import image from "../../../assets/images/image.jpg";

const ArtistCard = ({ profession, name }) => {
  return (
    <div className="Artist-Card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="name">
        <p>{profession}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ArtistCard;
