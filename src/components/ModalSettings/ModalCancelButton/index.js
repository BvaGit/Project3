import { connect } from 'react-redux';

import ModalCancelButton from "../ModalSettingsButton";
import { changeRegistrationField } from '../../../store/registration/actions';

const mapDispatchToProps = (dispatch) => ({
    changeField:(data) => dispatch(changeRegistrationField(data)),
})

export default connect(null, mapDispatchToProps)(ModalCancelButton);
