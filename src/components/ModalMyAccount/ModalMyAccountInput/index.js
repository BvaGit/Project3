import { connect } from "react-redux";
import ModalMyAccountInput from "./ModalMyAccountInput";

import { changeMyAccountField } from '../../../store/users/actions';


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    changeMyAccountField: (data) => dispatch(changeMyAccountField(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalMyAccountInput);