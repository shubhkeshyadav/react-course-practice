import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import GlobalContext from "../Store/GlobalContaxt";
import { useContext } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.handleCloseCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal-root");
const BackDropElement = document.getElementById("backdrop-root");

const Modal = (props) => {
  const ctx = useContext(GlobalContext);
  const handleCloseCart = () => {
    ctx.setglobalData({ ...ctx.globalData, displayCart: false });
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleCloseCart={handleCloseCart} />,
        BackDropElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
