import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Portal from '../Portal';
import message from '../constants/localization';

import './custommodal.scss'

function CustomModal({languageValue: langValue, handlecloseModal, header, content}) {

    return (
            <Portal >
                <div className="modal">
                    <IntlProvider locale={langValue} messages={message[langValue]}>
                        <div className="modal-content">
                            <span className="close" onClick={handlecloseModal}>&times;</span>
                            <div className="modal-header">
                                <FormattedMessage 
                                id={header} 
                                defaultMessage="First name" 
                                value={{ langValue }}>
                                {header}
                                </FormattedMessage>
                                </div>
                            {content}
                        </div>
                    </IntlProvider>
                </div>
            </Portal>
    )       
}

export default CustomModal;
