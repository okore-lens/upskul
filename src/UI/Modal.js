import React, { Fragment } from "react";
import "./modal.scss";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverLay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
