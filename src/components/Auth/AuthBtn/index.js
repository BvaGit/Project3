import {connect} from "react-redux";

import AuthBtn from "./AuthBtn";
import { getIsValidAuthFields } from "../../../store/auth/selectors";
import {authUserRequest} from "../../../store/auth/asyncActions";

const mapStateToProps = state => ({
    isError: getIsValidAuthFields(state),
})

const mapDispatchToProps = dispatch => ({
    handleAuth: () => dispatch(authUserRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBtn);
