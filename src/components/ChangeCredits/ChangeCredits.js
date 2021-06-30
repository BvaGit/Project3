import React from 'react';

import Input from '../Input';

const ChangeCredits = ({id, labelId, type, placeholderId, value, onChange}) => {
    return(
        <Input id={id} labelId={labelId} type={type} placeholderId={placeholderId} value={value} onChange={onChange}/>
    )
}
export default ChangeCredits;
