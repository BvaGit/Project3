import { connect } from "react-redux";

import ConnectSocket from "./Socket";
import { setSocketEmit } from "../../store/rooms/actions";

const mapDispatchToProps = (dispatch) => ({
  setSocketEmit: (payload) => dispatch(setSocketEmit(payload)),
  // sendMessage: (payload) => dispatch(sendMessage(payload)),
  // received message
  // create room
  // online/ offline
});

export default connect(null, mapDispatchToProps)(ConnectSocket);
