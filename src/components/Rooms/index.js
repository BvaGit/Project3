import { connect } from "react-redux";

import Rooms from "./Rooms";

import { getUserID } from "../../store/user/selectors";
import { getRoomsArray } from "../../store/rooms/selectors";
import { getUserChats } from "../../store/rooms/asyncActions";
import { setActiveRoom } from "../../store/rooms/actions";

const mapStateToProps = (state) => ({
  userId: getUserID(state),
  rooms: getRoomsArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserChats: (userId) => dispatch(getUserChats(userId)),
  setActiveRoom: (chatId) => dispatch(setActiveRoom(chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
