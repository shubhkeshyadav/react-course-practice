import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onErrorConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.msg}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onErrorConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const onErrorConfirm = () => {
    props.onErrorConfirm();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onErrorConfirm={props.onErrorConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onErrorConfirm={props.onErrorConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
