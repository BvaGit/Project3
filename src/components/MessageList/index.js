import MessagesList from "./MessagesList";

import { connect } from "react-redux";
import { getRoomMessages } from "../../store/rooms/selectors";

const mapStateToProps = (state, props) => ({
  messages: getRoomMessages(state, props),
});

export default connect(mapStateToProps, null)(MessagesList);
