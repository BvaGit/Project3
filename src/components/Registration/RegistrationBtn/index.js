import {connect} from "react-redux";

import RegistrationBtn from "./RegistrationBtn";
import {regAuthRequest} from "../../../store/registration/asyncActions";
import {getIsValidRegFields} from "../../../store/registration/selectors";

const mapStateToProps = (state) => ({
    isError: getIsValidRegFields(state),
});

const mapDispatchToProps = (dispatch) => ({
    regAuthRequest: () => dispatch(regAuthRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationBtn)
