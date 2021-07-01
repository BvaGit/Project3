import React from 'react';
import { FormattedMessage } from 'react-intl';

import Input from './ModalMyAccountInput';
import ModalMyAccountFile from './ModalMyAccountFile';

import './modalMyAccount.scss';
import '../RoomsHeader/roomsHeader.scss';

const ModalMyAccount = ({languageValue: langValue, handlecloseModal, postMyAccont, getMyAccount}) => {

    const handleBtn = () => {
        postMyAccont();
        getMyAccount();
    }

    return (
        <div className="my-account">
            <ModalMyAccountFile />
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="firstName" id="firstname" placeholder="firstNamePlaceholder"/> 
                </div>
                <div className="my-account__info1">
                    <Input label="lastName" id="lastname" placeholder="lastNamePlaceholder"/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="age" id="age" placeholder="agePlaceholder"/>
                </div>
                <div className="my-account__info1">
                    <Input label="city" id="city" placeholder="cityPlaceholder"/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="companyName" id="company" placeholder="companyNamePlaceholder"/>
                </div>
                <div className="my-account__info1">
                    <Input label="hobby" id="hobbi" placeholder="hobbyPlaceholder"/>
                </div>
            </div>
            <div className="button-box">
                <button className="button" onClick={handleBtn}>
                <FormattedMessage 
                    id="saveBTN" 
                    defaultMessage="Save" 
                    value={{ langValue }}>
                    Save
                </FormattedMessage>
                </button>
                <button className="button" onClick={handlecloseModal}>
                <FormattedMessage 
                    id="cancelBTN" 
                    defaultMessage="Cancel" 
                    value={{ langValue }}>
                    Cancel
                </FormattedMessage>
                </button>
            </div>
        </div>
    )
}

export default ModalMyAccount;
