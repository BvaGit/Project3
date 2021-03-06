import React from "react";
import { FormattedMessage } from "react-intl";

import Portal from "../Portal";

import "./custommodal.scss";

function CustomModal({
    languageValue: langValue,
    handlecloseModal,
    header,
    content,
  }) {
  return (
    <Portal>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={handlecloseModal}></button>
          <div className="modal-header">
            <FormattedMessage
              id={header}
              defaultMessage="First name"
              value={{ langValue }}
            >
              {header}
            </FormattedMessage>
          </div>
          {content}
        </div>
      </div>
    </Portal>
  );
}

export default CustomModal;
