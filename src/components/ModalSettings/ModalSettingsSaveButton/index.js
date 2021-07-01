import { connect } from 'react-redux';

import ModalSettingsSaveButton from './ModalSettingsSaveButton';
import { ChangeCredits } from '../../../store/users/asyncActions';

const mapDispatchToProps = (dispatch) => ({
    changeLogin: () => dispatch(ChangeCredits())
})

export default connect(null, mapDispatchToProps)(ModalSettingsSaveButton);
