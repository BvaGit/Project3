import RoomsHeader from "./RoomsHeader";
import { languageValue } from "../../store/localization/selectors";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    languageValue: languageValue(state),
})

export default connect(mapStateToProps, null)(RoomsHeader);