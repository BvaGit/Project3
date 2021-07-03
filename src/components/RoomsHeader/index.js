import { connect } from "react-redux";

import RoomsHeader from "./RoomsHeader";
import { isOpen } from '../../store/user/actions';
import { getUserName, getUserAvatar, getIsOpen } from '../../store/user/selectors';

const mapStateToProps = (state) => ({
    userName: getUserName(state),
    avatar: getUserAvatar(state),
    isOpen: getIsOpen(state)
})

const mapDispatchToProps = (dispatch) => ({
    modalMyAccount: () => dispatch(isOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsHeader);
