import RegistrationInput from './RegistrationInput';
import { connect } from 'react-redux';
import { getRegErrorByIdStore,getRegFieldByIdStore } from '../../../store/registration/selectors';
import { changeRegistrationField, changeRegistrationFieldError } from '../../../store/registration/actions';

const mapStateToProps = (state, props) => ({
    value: getRegFieldByIdStore(state, props),
    error: getRegErrorByIdStore(state, props)
})

const mapDispatchToProps = (dispatch) =>({
    changeField:(data) => dispatch(changeRegistrationField(data)),
    setError:(data) => dispatch(changeRegistrationFieldError(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationInput)