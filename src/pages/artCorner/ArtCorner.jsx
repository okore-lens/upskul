import { useEffect, useState } from "react";
import "./artCorner.scss";
import ArtCard from "./components/ArtCard";
import ArtistCard from "./components/ArtistCard";

const ArtCorner = () => {
  const [active, setActive] = useState(3);

  const text = (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ipsam
      laboriosam voluptatibus laudantium, iure iusto soluta? Ducimus sint quod
      laudantium odio porro nam voluptate ipsa sit necessitatibus harum ad
      suscipit in reiciendis quidem dolor, soluta molestias. Temporibus illo
      libero culpa. Optio sequi ipsum corporis animi?
    </p>
  );
  const arts = [
    {
      title: "Music",
      id: 1,
      text,
    },
    {
      title: "Instrumentals",
      id: 2,
      text,
    },
    {
      title: "Poetry",
      id: 3,
      text,
    },
    {
      title: "Comedy",
      id: 4,
      text,
    },
    {
      title: "Dancers",
      id: 5,
      text,
    },
  ];

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
