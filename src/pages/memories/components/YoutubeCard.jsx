const YoutubeCard = () => {
  return (
    <div className="YoutubeCard">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/mLYsMpKp1tY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeCard;
