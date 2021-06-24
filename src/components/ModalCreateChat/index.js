import { connect } from "react-redux";
import ModalCreateChat from "./ModalCreateChat";
import { languageValue } from "../../store/localization/selectors.js";

const mapStateToProps = (state) => ({
    languageValue: languageValue(state),
})

export default connect(mapStateToProps, null)(ModalCreateChat);