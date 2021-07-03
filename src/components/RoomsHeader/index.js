import RoomsHeader from "./RoomsHeader";
import { connect } from "react-redux";
import { isOpen } from '../../store/user/actions';

const mapStateToProps = (state) => ({
    fname: state.user.myAccount.firstname,
    avatar: state.user.myAccount.avatar,
    isOpen: state.user.isOpen
})

const mapDispatchToProps = (dispatch) => ({
    modalMyAccount: () => dispatch(isOpen())
})




export default connect(mapStateToProps, mapDispatchToProps)(RoomsHeader) ;