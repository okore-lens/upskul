import CircularSquare from "../circularSquare/CircularSquare";
import image from "../../assets/images/image.jpg";

import "./upComing.scss";

const UpComing = () => {
  return (
    <div className="UpComing">
      <div className="poster">
        <img src={image} />
      </div>
      <div className="content">
        <h3>Upcoming Show</h3>
        <div className="details">
          <div className="left">
            <p>artist</p>
            <p>venue</p>
          </div>
          <div className="right">
            <p>date</p>
            <p>time</p>
          </div>
        </div>
      </div>
      <div className="deco">
        <CircularSquare marginLeft={"inherit"} backgroundColor={"#fff"} />
      </div>
    </div>
  );
};

export default UpComing;
