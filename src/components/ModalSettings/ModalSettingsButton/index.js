import { connect } from 'react-redux';

import ModalSettingsButton from './ModalSettingsButton';
import { ChangeCredits } from '../../../store/user/asyncActions';
import {getIsValidRegFields} from "../../../store/registration/selectors";

const mapStateToProps = (state) => ({
    isError: getIsValidRegFields(state),
});
const mapDispatchToProps = (dispatch) => ({
    changeLogin: () => dispatch(ChangeCredits())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalSettingsButton);
