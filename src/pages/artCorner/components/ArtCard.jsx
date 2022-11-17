import { useEffect, useState } from "react";

const ArtCard = ({ id, title }) => {
  const [active, setActive] = useState("3");

  const clickHandler = () => {
    setActive(id);
  };

  // useEffect(() => {
  //   setActive(id);
  // }, clickHandler);

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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          ipsam laboriosam voluptatibus laudantium, iure iusto soluta? Ducimus
          sint quod laudantium odio porro nam voluptate ipsa sit necessitatibus
          harum ad suscipit in reiciendis quidem dolor, soluta molestias.
          Temporibus illo libero culpa. Optio sequi ipsum corporis animi?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          ipsam laboriosam voluptatibus laudantium, iure iusto soluta? Ducimus
          sint quod laudantium odio porro nam voluptate ipsa sit necessitatibus
          harum ad suscipit in reiciendis quidem dolor, soluta molestias.
          Temporibus illo libero culpa. Optio sequi ipsum corporis animi?
        </p>
        <button>Discover Now</button>
      </div>
    </div>
  );
};

export default ArtCard;
