import MessagesContainer from "./MessagesContainer";

import { connect } from "react-redux";

import { getSocket } from "../../store/rooms/selectors";
// import { sendMessages } from "../../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../store/users/asyncActions";
// import { getUsersFromStore } from "../../../store/users/selectors";
import { getUserChats } from "../../store/rooms/asyncActions";
// import { setActiveRoom } from "../../../store/rooms/actions";
import { getActiveRoom } from "../../store/rooms/selectors";

const mapStateToProps = (state) => ({
  socket: getSocket(state),
  chatName: getActiveRoom(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserChats: (userId) => dispatch(getUserChats(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
