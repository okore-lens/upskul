import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./mediaHandle.scss";

const MediaHandle = ({ icon, tag }) => {
  return (
    <div className="MediaHandle">
      <div className="icon-parent">
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
      <p>{tag}</p>
    </div>
  );
};

export default MediaHandle;
