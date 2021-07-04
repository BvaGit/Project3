import React from 'react';
import { injectIntl } from 'react-intl';

import './Input.scss';

const Input = ({ intl, labelId, id, type, name, value, titleId, placeholderId, minLength, maxLength, onBlur, onChange, className, isSelected }) => {
    return (
        <label className={`inputs__label ${isSelected ? 'is-selected': ''}`}>{intl.formatMessage({id: `${labelId}`})}
            <input 
                id={id}
                type={type}
                name={name}
                value={value}
                title={intl.formatMessage({id: `${titleId}`})}
                placeholder={intl.formatMessage({id: `${placeholderId}`})}
                className={`inputs__input ${className}`}
                minLength={minLength}
                maxLength={maxLength}
                onBlur={onBlur}
                onChange={onChange}
            />
        </label>
    )
}

export default injectIntl(Input);
