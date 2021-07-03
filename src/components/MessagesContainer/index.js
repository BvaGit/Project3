import MessagesContainer from "./MessagesContainer";

import { connect } from "react-redux";

import { getRoomById } from "../../store/rooms/selectors";
import { getNewMessage } from "../../store/rooms/selectors";
import { getUserName } from "../../store/user/selectors";

const mapStateToProps = (state, props) => ({
  chat: getRoomById(state, props),
  new_message: getNewMessage(state, props),
  userName: getUserName(state)
});

export default connect(mapStateToProps)(MessagesContainer);
