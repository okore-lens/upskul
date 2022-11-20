import { useState } from "react";
import Modal from "../../../UI/Modal";

const ArtCard = ({ id, title, text, active, activeHandler }) => {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    activeHandler(id);
  };

  const truncatedText = text.substring(0, 340);

  const discoverHandler = () => {
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  };

  return (
    <div
      onClick={clickHandler}
      className={` ArtCard ${active === id ? "active" : ""}`}
    >
      <div className="number">
        <h1>0{id} .</h1>
        <hr />
      </div>
      <div className="title">
        <h3>{title}</h3>
        <hr />
        <p>{truncatedText} ......</p>
        <button onClick={discoverHandler}>Discover Now</button>
        {showModal && (
          <Modal onClose={closeHandler}>
            <div className="art-modal">
              <h1>{title}</h1>
              <hr />
              <p>{text}</p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ArtCard;
