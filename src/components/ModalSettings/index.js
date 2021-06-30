import ModalSettings from "./ModalSettings";
import { connect } from 'react-redux';
import { ChangeCredits } from '../../store/users/asyncActions';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    changeLogin: (body) => dispatch(ChangeCredits(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSettings);