import { connect } from "react-redux";

import MessageInput from "./MessageInput";

import { getSocket } from "../../../store/rooms/selectors";
import { getRooms, getActiveRoom } from "../../../store/rooms/selectors";
import { getUserID } from "../../../store/user/selectors";
import { sendMessages } from "../../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../../store/users/asyncActions";
import { setActiveRoom } from "../../../store/rooms/actions";

const mapStateToProps = (state) => ({
  socket: getSocket(state),
  userId: getUserID(state),
  chatId: getActiveRoom(state),
  rooms: getRooms(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendMessages: (payload) => dispatch(sendMessages(payload)),
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
  // getUserChats: (userId) => dispatch(getUserChats(userId)),
  setActiveRoom: (payload) => dispatch(setActiveRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
