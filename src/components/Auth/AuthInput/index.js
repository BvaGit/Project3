import { connect } from 'react-redux'

import AuthInput from './AuthInput'
import { getAuthFieldByIdStore, getAuthErrorByIdStore } from "../../../store/auth/selectors";
import { changeAuthFieldError, changeAuthField } from "../../../store/auth/actions";

const mapStateToProps = (state, props) => ({
    value: getAuthFieldByIdStore(state, props),
    error: getAuthErrorByIdStore(state, props)
})

const mapDispatchToProps = (dispatch) =>({
    changeField:(data) => dispatch(changeAuthField(data)),
    setError:(data) => dispatch(changeAuthFieldError(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthInput)
