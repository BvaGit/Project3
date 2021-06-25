import { connect } from "react-redux";

import RoomsHeader from "./RoomsHeader";
import { languageValue } from "../../store/localization/selectors";

const mapStateToProps = (state) => ({
    languageValue: languageValue(state),
})
const mapDispatchToProps = (dispatch) => ({
    handleLanguage: (payload) => dispatch(handleLanguage(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(RoomsHeader);