import React, { useState} from 'react';
import Input from '../../Input';
import { validateRegField } from '/src/helpers/validation'

const RegistrationInput = ({ value, changeField, id, label, placeholder, error, setError }) =>{
    const [blured, setBlured] = useState(false);

    const handleBlur = () =>{
        setBlured(true);
        if(id !== 'confirm_password') setError({[id]: validateRegField(id, value) })
    }

    const handleChange = (e) => {
        changeField({ [id]: e.target.value })
        if(blured) setBlured(false)
    }

    return (
        <>
            <Input  
                label={label} 
                type="text" 
                name={id}
                value={value}
                placeholder={placeholder} 
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