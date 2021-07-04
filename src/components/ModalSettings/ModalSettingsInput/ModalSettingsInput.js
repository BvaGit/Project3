import React, { useState}  from 'react';

import Input from '../../Input';
import { validateRegField } from '/src/helpers/validation';

const ModalSettingsInput = ({ id, name, value, labelId, type,  titleId, placeholderId, changeInput, error, setError, changeField }) => {
    const [blured, setBlured] = useState(false);

    const handleBlur = () =>{
        setBlured(true);
        if(id !== 'confirmPassword') setError({[id]: validateRegField(id, value) })
    }

    const handleChange = (e) => {
        changeInput({ [id]:e.target.value }) 
        changeField({ [id]: e.target.value })
        if(blured) setBlured(false)
    }

    return(
        <>
            <Input 
                id={id} 
                name={name}
                labelId={labelId} 
                type={type} 
                value={value}
                titleId={titleId}
                placeholderId={placeholderId} 
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {(blured && error) && <div className="inputErr">{error}</div>}
        </>
    )
}

export default ModalSettingsInput;