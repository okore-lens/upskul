import "./artCorner.scss";
import ArtCard from "./components/ArtCard";

const ArtCorner = () => {
  return (
    <div className="ArtCorner">
      <div className="hero">
        <div className="text">
          <h1>ArtCorner</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            molestiae sequi quidem sunt velit unde vel adipisci et nesciunt
            iure! ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit
            ipsa quasi velit, unde ad dolorum aliquid at natus qui!
          </p>
        </div>
        <div className="art-cards">
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
        </div>
      </div>
    </div>
  );
};

export default ArtCorner;
