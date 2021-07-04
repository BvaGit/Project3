import React from 'react';
import { injectIntl } from 'react-intl';

import './Button.scss';

const Button = ({ intl, type, textId, disabled, onClick }) => {
    
    return (
        <button 
            type={type} 
            onClick={onClick}
            className="button"
            disabled={disabled}
        >
            {intl.formatMessage({id: `${textId}`})}
        </button>
    )
}

export default injectIntl(Button);
