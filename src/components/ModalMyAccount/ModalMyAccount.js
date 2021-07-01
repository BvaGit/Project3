import React from "react";
import { FormattedMessage } from "react-intl";

import Input from './ModalMyAccountInput';
import ModalMyAccountFile from './ModalMyAccountFile';

import "./modalMyAccount.scss";
import "../RoomsHeader/roomsHeader.scss";

function ModalMyAccount({ languageValue: langValue, handlecloseModal, postMyAccont }) {
    const handleBtn = () => {
        postMyAccont();
    }
  return (
    <div className="my-account">
        <ModalMyAccountFile />
      <div className="my-account__info">
        <div className="my-account__info1">
          <Input
            labelId="firstName"
            type="text"
            placeholderId="firstNamePlaceholder"
          />
        </div>
        <div className="my-account__info1">
          <Input
            labelId="lastName"
            type="text"
            placeholderId="lastNamePlaceholder"
          />
        </div>
      </div>
      <div className="my-account__info">
        <div className="my-account__info1">
          <Input labelId="age" type="number" placeholderId="agePlaceholder" />
        </div>
        <div className="my-account__info1">
          <Input labelId="city" type="text" placeholderId="cityPlaceholder" />
        </div>
      </div>
      <div className="my-account__info">
        <div className="my-account__info1">
          <Input
            labelId="companyName"
            type="text"
            placeholderId="companyNamePlaceholder"
          />
        </div>
        <div className="my-account__info1">
          <Input labelId="hobby" type="text" placeholderId="hobbyPlaceholder" />
        </div>
      </div>
      <div className="button-box">
        <button className="button"  onClick={handleBtn}>
          <FormattedMessage
            id="saveBTN"
            defaultMessage="Save"
            value={{ langValue }}
          >
            Save
          </FormattedMessage>
        </button>
        <button className="button" onClick={handlecloseModal}>
          <FormattedMessage
            id="cancelBTN"
            defaultMessage="Cancel"
            value={{ langValue }}
          >
            Cancel
          </FormattedMessage>
        </button>
      </div>
    </div>
  );
}

export default ModalMyAccount;
