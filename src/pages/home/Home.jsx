import CircularSquare from "../../components/circularSquare/CircularSquare";
import Hero from "./components/Hero";
import UpComing from "../../components/upComing/UpComing";
import image from "../../assets/images/image.jpg";

import "./home.scss";

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
      <div className="home-about">
        <div className="about">
          <div className="left">
            <h1>
              Who Are <br />
              We?
            </h1>
            <div className="circular-help">
              <div className="inner-circle">
                <p>Get In Touch</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="floating-div">
              <img src={image} />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus doloremque facere nesciunt tempore officiis
                necessitatibus ut deleniti neque numquam. Harum, eius fuga?
                Temporibus ipsum maxime, neque explicabo fugit adipisci dolores,
                repellat pariatur atque nesciunt commodi quidem distinctio
                quisquam possimus quis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                porro ipsa labore est libero. Accusantium debitis quas
                temporibus assumenda. Repudiandae.
              </p>
            </div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
};

export default Home;
