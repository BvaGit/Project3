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
            label="firstName"
            id="firstname"
            type="text"
            placeholder="firstNamePlaceholder"
            title="firstNamePlaceholder"
          />
        </div>
        <div className="my-account__info1">
          <Input
            label="lastName"
            id="lastname"
            type="text"
            placeholder="lastNamePlaceholder"
            title="lastNamePlaceholder"
          />
        </div>
      </div>
      <div className="my-account__info">
        <div className="my-account__info1">
          <Input 
            label="age" 
            type="number" 
            id="age" 
            placeholder="agePlaceholder"
            title="agePlaceholder" 
          />
        </div>
        <div className="my-account__info1">
          <Input 
            label="city" 
            type="text" 
            id="city" 
            placeholder="cityPlaceholder" 
            title="cityPlaceholder"
          />
        </div>
      </div>
      <div className="my-account__info">
        <div className="my-account__info1">
          <Input
            label="companyName"
            type="text"
            id="company"
            placeholder="Enter your company name..."
            title="Enter your company name..."
          />
        </div>
        <div className="my-account__info1">
          <Input 
            label="hobby" 
            type="text" 
            id="hobby" 
            placeholder="hobbyPlaceholder" 
            title="hobbyPlaceholder"
            />
        </div>
      </div>
      <div className="button-box">
        <button className="button"  onClick={handleBtn}>
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
