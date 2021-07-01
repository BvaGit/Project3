import ModalSettingsInput from "./ModalSettingsInput";
import { connect } from 'react-redux';
import { getSettingsLoginStore, getSettingsPasswordStore } from '../../../store/settings/selectors';
import { handleValueInput } from '../../../store/settings/actions';

const mapStateToProps = (state, props) => ({
    login: getSettingsLoginStore(state, props),
    password: getSettingsPasswordStore(state, props)
})
const mapDispatchToProps = (dispatch) => ({
    changeInput: (data) => dispatch(handleValueInput(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalSettingsInput);
