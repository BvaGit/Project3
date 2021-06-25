import React from "react";
import Portal from "../Portal";

import "./custommodal.scss";

function CustomModal(props) {
  return (
    <Portal>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={props.handlecloseModal}>
          </button>
          <div className="modal-header">{props.header}</div>
          {props.content}
        </div>
      </div>
    </Portal>
  );
}

export default CustomModal;
