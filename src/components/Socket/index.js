import { connect } from "react-redux";

import ConnectSocket from "./Socket";

import { setSocketEmit } from "../../store/rooms/actions";
import { setNewRoom, setNewMessage } from "../../store/rooms/actions";

const mapDispatchToProps = (dispatch) => ({
  setSocketEmit: (payload) => dispatch(setSocketEmit(payload)),
  setNewRoom: (payload) => dispatch(setNewRoom(payload)),
  setNewMessage: (payload) => dispatch(setNewMessage(payload)),
});

export default connect(null, mapDispatchToProps)(ConnectSocket);
