import React, { useState} from 'react';
import Input from '../../Input';
import { validateRegField } from '/src/helpers/validation'

const RegistrationInput = ({ type, value, title, changeField, id, label, placeholder, error, setError }) =>{
    const [blured, setBlured] = useState(false);

    const handleBlur = () =>{
        setBlured(true);
        if(id !== 'confirmPassword') setError({[id]: validateRegField(id, value) })
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

export default RegistrationInput