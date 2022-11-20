import { useState } from "react";
import "./artCorner.scss";
import ArtCard from "./components/ArtCard";
import ArtistCard from "./components/ArtistCard";
import { arts, artists } from "./components/arts";

const ArtCorner = () => {
  const [active, setActive] = useState(3);

  const activeHandler = (id) => {
    setActive(id);
  };

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
          {arts.map((art) => (
            <ArtCard
              key={art.id}
              id={art.id}
              title={art.title}
              text={art.text}
              active={active}
              activeHandler={activeHandler}
            />
          ))}
        </div>

        <div className="navigation">
          <button>PPP</button>
          <button className="next">NNN</button>
        </div>
      </div>
      <div className="artists">
        <h1>Our Artists</h1>
        <p>Both Present and Past</p>
        <div className="artist-cards">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              name={artist.name}
              profession={artist.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtCorner;
