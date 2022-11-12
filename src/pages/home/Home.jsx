import React from "react";
import CircularSquare from "../../components/circularSquare/CircularSquare";

const Home = () => {
  return (
    <div className="Home">
      <CircularSquare marginLeft={"50%"} backgroundColor={"grey"} />
      {/* <CircularSquare marginLeft={"10%"} backgroundColor={"black"} />
      <CircularSquare marginLeft={"90%"} backgroundColor={"grey"} /> */}
    </div>
  );
};

export default Home;
