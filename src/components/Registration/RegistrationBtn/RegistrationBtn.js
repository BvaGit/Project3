import * as React from 'react'

import Button from "../../Button";

const RegistrationBtn = ({ regAuthRequest, isError }) => {
    return (
        <Button
            type="button"
            textId="SIGN UP"
            onClick={regAuthRequest}
            disabled={!isError}
        />
    )
};

export default RegistrationBtn;
