import { connect } from "react-redux";

import RoomsHeader from "./RoomsHeader";
import { isOpen, logoutUser } from '../../store/user/actions';
import { searchRoom } from '../../store/rooms/actions';
import { getUserName, getUserAvatar, getIsOpen } from '../../store/user/selectors';
import { getUserLogin } from "../../store/users/selectors";

const mapStateToProps = (state) => ({
    userName: getUserName(state),
    userLogin: getUserLogin(state),
    avatar: getUserAvatar(state),
    isOpen: getIsOpen(state)
})

const mapDispatchToProps = (dispatch) => ({
    modalMyAccount: () => dispatch(isOpen()),
    logout: () => dispatch(logoutUser()),
    searchRoom: (nameRooms) => dispatch(searchRoom(nameRooms))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsHeader);
