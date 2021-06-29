import MessageInput from "./MessageInput";
import { connect } from "react-redux";

import { getSocket } from "../../../store/rooms/selectors";
import { sendMessages } from "../../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../../store/users/asyncActions";
import { getUsersFromStore } from "../../../store/users/selectors";

const mapStateToProps = (state) => ({
  socket: getSocket(state),
  users: getUsersFromStore(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendMessages: (payload) => dispatch(sendMessages(payload)),
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
