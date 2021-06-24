import { connect } from 'react-redux';
import ModalSettings from "./ModalSettings"
import { languageValue } from "../../store/localization/selectors.js";

const mapStateToProps = (state) => ({
    languageValue: languageValue(state),
})

export default connect(mapStateToProps, null)(ModalSettings);
