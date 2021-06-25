import { connect } from 'react-redux';
import CustomModal from "./CustomModal";
import { languageValue } from '../../store/localization/selectors';

const mapStateToProps = (state) => ({
    languageValue: languageValue(state)
})

export default connect(mapStateToProps, null)(CustomModal);