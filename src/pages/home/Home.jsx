import { useState } from "react";
import CircularSquare from "../../components/circularSquare/CircularSquare";
import Hero from "./components/Hero";
import UpComing from "../../components/upComing/UpComing";
import image from "../../assets/images/image.jpg";
import upcoming from "./components/upcoming";

import "./home.scss";
import Modal from "../../UI/Modal";

const Home = () => {
  const [eventItem, setEventItem] = useState({
    title: "",
    description: "",
    artist: "",
    time: "",
    date: "",
    venue: "",
  });
  const [showModal, setShowModal] = useState(false);

  const modalHandler = (id) => {
    id -= 1;
    setEventItem({
      title: upcoming[id].title,
      description: upcoming[id].description,
      artist: upcoming[id].artist,
      time: upcoming[id].time,
      date: upcoming[id].date,
      venue: upcoming[id].venue,
    });
    setShowModal(true);
  };

  const modalContent = (
    <div className="content">
      <h1>{eventItem.title}</h1>
      <div className="content-details">
        <div className="image">
          <img src={image} />
        </div>
        <div className="content-detail">
          <p>{eventItem.artist}</p>
          <p>{eventItem.date}</p>
          <p>{eventItem.venue}</p>
          <p>{eventItem.time}</p>
        </div>
      </div>
      <p>{eventItem.description}</p>
    </div>
  );

  // Handling Backdrop Clicks
  const closeHandler = () => {
    setShowModal(false);
  };
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
          {upcoming.map((event) => (
            <UpComing
              key={event.id}
              id={event.id}
              title={event.title}
              artist={event.artist}
              venue={event.venue}
              date={event.date}
              time={event.time}
              isClicked={modalHandler}
            />
          ))}
        </div>
        {showModal && <Modal onClose={closeHandler}>{modalContent}</Modal>}
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
