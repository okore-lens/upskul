import YoutubeCard from "./components/YoutubeCard";
import "./memories.scss";

const Memories = () => {
  return (
    <div className="Memories">
      <div className="hero"></div>
      <div className="showcase">
        <div className="youtube">
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
        </div>
        <div className="instagram">Instagram</div>
      </div>
    </div>
  );
};

export default Memories;
