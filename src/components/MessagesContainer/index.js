import MessagesContainer from "./MessagesContainer";

import { connect } from "react-redux";

import { getRoomById } from "../../store/rooms/selectors";

const mapStateToProps = (state, props) => ({
  chat: getRoomById(state, props),
});

export default connect(mapStateToProps)(MessagesContainer);
