import "./artCorner.scss";
import ArtCard from "./components/ArtCard";
import ArtistCard from "./components/ArtistCard";

const ArtCorner = () => {
  const arts = [
    {
      title: "Music",
      id: "1",
    },
    {
      title: "Instrumentals",
      id: "2",
    },
    {
      title: "Poetry",
      id: "3",
    },
    {
      title: "Comedy",
      id: "4",
    },
    {
      title: "Dancers",
      id: "5",
    },
  ];
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
            <ArtCard key={art.id} id={art.id} title={art.title} />
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
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </div>
  );
};

export default ArtCorner;
