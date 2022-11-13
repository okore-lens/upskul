import CircularSquare from "../../../components/circularSquare/CircularSquare";
import MediaHandle from "../../../components/mediaHandles/MediaHandle";
import {
  faTwitter as tweet,
  faInstagram as ig,
  faYoutube as youtube,
  faFacebook as facebook,
} from "@fortawesome/free-brands-svg-icons";
import image from "../../../assets/images/image.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="title">
          <h1>UPSKUL</h1>
        </div>
        <div className="hero-deco">
          <div className="sm-rectangle">
            <img src={image} />
          </div>
          <div className="hero-text">
            <h3>Home of arts, music and good vibes</h3>
            <hr />
            <div className="media">
              <a href="https://twitter.com/" target="_blank">
                <MediaHandle icon={tweet} tag="Twitter" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <MediaHandle icon={ig} tag="Instagram" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <MediaHandle icon={youtube} tag="YouTube" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <MediaHandle icon={facebook} tag="Facebook" />
              </a>
            </div>
          </div>
          <div className="deco">
            <CircularSquare marginLeft={"0%"} backgroundColor={"#000000"} />
          </div>
          <div className="lg-rectangle">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
