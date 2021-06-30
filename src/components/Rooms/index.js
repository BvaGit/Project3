import Rooms from "./Rooms";
import { connect } from "react-redux";

import { getUserChats } from "../../store/rooms/asyncActions";
import { setActiveRoom } from "../../store/rooms/actions";
import { getUserID } from "../../store/user/selectors";
import { getRoomsArray } from "../../store/rooms/selectors";

const mapStateToProps = (state) => ({
  userId: getUserID(state),
  rooms: getRoomsArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserChats: (userId) => dispatch(getUserChats(userId)),
  setActiveRoom: (chatId) => dispatch(setActiveRoom(chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
