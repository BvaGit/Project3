import { connect } from 'react-redux';
import Settings from "./Settings";
import { handleLanguage } from '../../store/localization/actions';

const mapDispatchToProps = (dispatch) => ({
    handleLanguage: (payload) => dispatch(handleLanguage(payload)),
})

export default connect(null, mapDispatchToProps)(Settings);