import ModalSettingsInput from "./ModalSettingsInput";
import { connect } from 'react-redux';
import { getSettingsLoginStore, getSettingsPasswordStore } from '../../../store/settings/selectors';
import { handleValueInput } from '../../../store/settings/actions';
import { changeRegistrationFieldError, changeRegistrationField } from "../../../store/registration/actions";
import { getRegErrorByIdStore, getRegFieldByIdStore } from "../../../store/registration/selectors";

const mapStateToProps = (state, props) => ({
    login: getSettingsLoginStore(state, props),
    password: getSettingsPasswordStore(state, props),
    value: getRegFieldByIdStore(state, props),
    error: getRegErrorByIdStore(state, props)
})
const mapDispatchToProps = (dispatch) => ({
    changeInput: (data) => dispatch(handleValueInput(data)),
    changeField:(data) => dispatch(changeRegistrationField(data)),
    setError:(data) => dispatch(changeRegistrationFieldError(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalSettingsInput);
