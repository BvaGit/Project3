import React, { useState} from 'react';

import { validateRegField } from '/src/helpers/validation'

import Input from '../../Input';

const AuthInput = ({ value, type, changeField, title, id, label, placeholder, error, setError }) =>{
    const [blured, setBlured] = useState(false);

    const handleBlur = () =>{
        setBlured(true);
        setError({[id]: validateRegField(id, value) })
    }

    const handleChange = (e) => {
        changeField({ [id]: e.target.value })
        if(blured) setBlured(false)
    }

    return (
        <>
            <Input
                labelId={label}
                type={type}
                name={id}
                value={value}
                titleId={title}
                placeholderId={placeholder}
                minLength="1"
                maxLength="30"
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {(blured && error) && <div className="inputErr">{error}</div>}
        </>
    )
}

export default AuthInput 
