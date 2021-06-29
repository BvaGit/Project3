import MessageInput from "./MessageInput";
import { connect } from "react-redux";

import { getSocket } from "../../../store/rooms/selectors";
import { sendMessages } from "../../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../../store/users/asyncActions";
import { getUsersFromStore } from "../../../store/users/selectors";
import { getUserChats } from "../../../store/rooms/asyncActions";
import { setActiveRoom } from "../../../store/rooms/actions";
import { getUserID } from "../../../store/user/selectors";
import { getRooms } from "../../../store/rooms/selectors";

const mapStateToProps = (state) => ({
  socket: getSocket(state),
  users: getUsersFromStore(state),
  userId: getUserID(state),
  rooms: getRooms(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendMessages: (payload) => dispatch(sendMessages(payload)),
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
  getUserChats: (userId) => dispatch(getUserChats(userId)),
  setActiveRoom: (chatId) => dispatch(setActiveRoom(chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
