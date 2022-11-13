import CircularSquare from "../../components/circularSquare/CircularSquare";
import MediaHandle from "../../components/mediaHandles/MediaHandle";

import "./home.scss";
import Hero from "./components/Hero";
import UpComing from "../../components/upComing/UpComing";

const Home = () => {
  return (
    <div className="Home">
      <CircularSquare marginLeft={"40%"} backgroundColor={"#636262"} />
      <Hero />
      <div className="deco2">
        <CircularSquare marginLeft={"20%"} backgroundColor={"#636262"} />
      </div>
      <div className="upcoming">
        <h1>UpComing Events</h1>
        <div className="events">
          <UpComing />
          <UpComing />
          <UpComing />
          <UpComing />
          <UpComing />
          <UpComing />
          <UpComing />
          <UpComing />
        </div>
      </div>
    </div>
  );
};

export default Home;
