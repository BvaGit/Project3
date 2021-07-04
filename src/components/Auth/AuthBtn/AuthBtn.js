import React from "react";

import Button from "../../Button";

const AuthBtn = ({handleAuth, isError}) => {
    return (
        <Button
            type="button"
            textId="SIGN IN"
            disabled={!isError}
            onClick={handleAuth}
        />
    );
}

export default AuthBtn;
