import { connect } from 'react-redux';

import ModalSettingsSaveButton from './ModalSettingsSaveButton';
import { ChangeCredits } from '../../../store/user/asyncActions';

const mapDispatchToProps = (dispatch) => ({
    changeLogin: () => dispatch(ChangeCredits())
})

export default connect(null, mapDispatchToProps)(ModalSettingsSaveButton);
