import MessagesList from "./MessagesList";
import { connect } from "react-redux";
import { getSocket } from "../../store/rooms/selectors";

const mapStateToProps = (state) => ({
  socket: getSocket(state),
});

export default connect(mapStateToProps)(MessagesList);
