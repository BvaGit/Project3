import React from 'react';
import { FormattedMessage } from 'react-intl';

import Input from '../Input';
import message from '../constants/localization';

import './modalMyAccount.scss';
import '../RoomsHeader/roomsHeader.scss';

function ModalMyAccount({languageValue: langValue, handlecloseModal}){
    return (
        <div className="my-account">
                <div className="my-account__avatar">
                    <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                </div>
                <div className="my-account__info">
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="firstName" 
                            defaultMessage="First name" 
                            value={{ langValue }}>
                            First name
                        </FormattedMessage>
                        <FormattedMessage 
                            id="firstNamePlaceholder" 
                            defaultMessage="Enter your first name..." 
                            value={{ langValue }}>
                            {placeholder=>
                                <Input type="text" placeholder={placeholder}/> 
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="lastName" 
                            defaultMessage="Last name" 
                            value={{ langValue }}>
                            Last name
                        </FormattedMessage>
                        <FormattedMessage 
                            id="lastNamePlaceholder" 
                            defaultMessage="Enter your last name..." 
                            value={{ langValue }}>
                            {placeholder=>
                            <Input type="text" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                </div>
                <div className="my-account__info">
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="age" 
                            defaultMessage="Age" 
                            value={{ langValue }}>
                            Age
                        </FormattedMessage>
                        <FormattedMessage 
                            id="agePlaceholder" 
                            defaultMessage="Enter your age..." 
                            value={{ langValue }}>
                            {placeholder=>
                            <Input type="number" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="city" 
                            defaultMessage="City" 
                            value={{ langValue }}>
                            City
                        </FormattedMessage>
                        <FormattedMessage 
                            id="cityPlaceholder" 
                            defaultMessage="Enter your city..." 
                            value={{ langValue }}>
                            {placeholder=>
                            <Input type="text" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                </div>
                <div className="my-account__info">
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="companyName" 
                            defaultMessage="Company name" 
                            value={{ langValue }}>
                            Company name
                        </FormattedMessage>
                        <FormattedMessage 
                            id="companyNamePlaceholder" 
                            defaultMessage="Enter your company name..." 
                            value={{ langValue }}>
                            {placeholder=>
                            <Input type="text" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                    <div className="my-account__info1">
                        <label className="inputs__label">
                        <FormattedMessage 
                            id="hobby" 
                            defaultMessage="Hobby" 
                            value={{ langValue }}>
                            Hobby
                        </FormattedMessage>
                        <FormattedMessage 
                            id="hobbyPlaceholder" 
                            defaultMessage="Enter your hobby..." 
                            value={{ langValue }}>
                            {placeholder=>
                            <Input type="text" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        </label>
                    </div>
                </div>
                <div className="button-box">
                    <button className="button">
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
