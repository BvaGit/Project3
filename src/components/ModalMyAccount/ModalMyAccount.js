import React from "react";
import { FormattedMessage } from "react-intl";

import Input from "../Input";

import "./modalMyAccount.scss";
import "../RoomsHeader/roomsHeader.scss";

function ModalMyAccount({ languageValue: langValue, handlecloseModal }) {
  return (
    <div className="my-account">
      <div className="my-account__avatar">
        <img
          className="rooms-header__avatar"
          src="../../../public/assets/images/1-36-1024x1024.jpg"
        />
      </div>
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
        <button className="button">
          <FormattedMessage
            id="Save"
            defaultMessage="Save"
            value={{ langValue }}
          >
            Save
          </FormattedMessage>
        </button>
        <button className="button" onClick={handlecloseModal}>
          <FormattedMessage
            id="Cancel"
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
