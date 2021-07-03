import { connect } from "react-redux";
import ModalMyAccountInput from "./ModalMyAccountInput";

import { changeMyAccountField } from '../../../store/user/actions';


const mapDispatchToProps = (dispatch) => ({
    changeMyAccountField: (data) => dispatch(changeMyAccountField(data)),
})

export default connect(null, mapDispatchToProps)(ModalMyAccountInput);