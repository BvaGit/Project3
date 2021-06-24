import { connect } from 'react-redux';

import Settings from "./Settings";
import { handleLanguage } from '../../store/localization/actions';
import { languageValue } from "../../store/localization/selectors";

const mapStateToProps = (state) => ({
    languageValue: languageValue(state),
})
const mapDispatchToProps = (dispatch) => ({
    handleLanguage: (payload) => dispatch(handleLanguage(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings);