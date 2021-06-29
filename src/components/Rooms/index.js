import Rooms from "./Rooms";
import { connect } from "react-redux";

import { getUserChats } from "../../store/rooms/asyncActions";
import { getUserID } from "../../store/user/selectors";
import { getRooms } from "../../store/rooms/selectors";

const mapStateToProps = state => ({
  userId: getUserID(state),
  rooms: getRooms(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserChats: userId => dispatch(getUserChats(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
