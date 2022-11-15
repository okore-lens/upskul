import HeroText from "./component/HeroText";
import image from "../../assets/images/image.jpg";

import "./about.scss";
import Contact from "./component/contact/Contact";

const About = () => {
  return (
    <div className="About">
      <div className="hero">
        <div className="right">
          <img src={image} />
        </div>
        <div className="left">
          <h1>About Upskul</h1>
          <HeroText />
          <HeroText />
        </div>
      </div>
      <div className="section">
        <div className="left">
          <div className="circle">
            <img src={image} />
          </div>
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laboriosam sint praesentium dignissimos consectetur eos autem velit
            repudiandae. Voluptates quisquam qui itaque, obcaecati error ut
            voluptatum blanditiis voluptas fuga in inventore labore eius, minima
            illum deleniti. Nam obcaecati veritatis esse, quod magnam nihil
            deserunt ut ea illo quibusdam laboriosam odit maiores, molestiae
            recusandae molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laboriosam sint praesentium dignissimos consectetur eos autem velit
            repudiandae. Voluptates quisquam qui itaque, obcaecati error ut
            voluptatum blanditiis voluptas fuga in inventore labore eius, minima
            illum deleniti. Nam obcaecati veritatis esse, quod magnam nihil
            deserunt ut ea illo quibusdam laboriosam odit maiores, molestiae
            recusandae molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laboriosam sint praesentium dignissimos consectetur eos autem velit
            repudiandae. Voluptates quisquam qui itaque, obcaecati error ut
            voluptatum blanditiis voluptas fuga in inventore labore eius, minima
            illum deleniti. Nam obcaecati veritatis esse, quod magnam nihil
            deserunt ut ea illo quibusdam laboriosam odit maiores, molestiae
            recusandae molestias.
          </p>
        </div>
      </div>
      <div className="bottom-text">
        <HeroText />
        <HeroText />
        <HeroText />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default About;
