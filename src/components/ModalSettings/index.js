import { connect } from 'react-redux';

import ModalSettings from "./ModalSettings";
import { handleValueInput } from '../../store/settings/actions';

const mapDispatchToProps = (dispatch) => ({
    changeInput: (data) => dispatch(handleValueInput(data))
})

export default connect(null, mapDispatchToProps)(ModalSettings);