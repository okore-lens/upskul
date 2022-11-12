import "./circularSquare.scss";

const CircularSquare = ({ marginLeft, backgroundColor }) => {
  const myStyle = {
    marginLeft,
  };

  const circleMystyle = {
    backgroundColor,
  };

  return (
    <div style={myStyle} className="square">
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
      <div style={circleMystyle} className="circle"></div>
    </div>
  );
};

export default CircularSquare;
