import React from 'react';

import Input from '../Input';

const ChangeCredits = ({id, name, labelId, type, placeholderId, onChange}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleValueInput = (e) => {
        const body = {
            login, 
            password
        }
        changeLogin(body);
        console.log(body);
    };
    const handleValueInputLogin = (e) => {
        setLogin(e.target.value)
    };
    const handleValueInputPassword = (e) => {
        setPassword(e.target.value)
    };

    return(
        <Input 
        id={id} 
        name={name}
        labelId={labelId} 
        type={type} 
        placeholderId={placeholderId} 
        onChange={onChange}/>
    )
}
export default ChangeCredits;
