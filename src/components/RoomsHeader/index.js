import RoomsHeader from "./RoomsHeader";
import { connect } from "react-redux";
import { isOpen } from '../../store/user/actions';
import { getUserName } from '../../store/user/selectors';

const mapStateToProps = (state) => ({
    userName: getUserName(state),
    avatar: state.user.myAccount.avatar,
    isOpen: state.user.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    modalMyAccount: () => dispatch(isOpen())
})




export default connect(mapStateToProps, mapDispatchToProps)(RoomsHeader) ;