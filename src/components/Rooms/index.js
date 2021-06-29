import Rooms from "./Rooms";
import { connect } from "react-redux";

import { getUserChats } from "../../store/rooms/asyncActions";

const mapDispatchToProps = (dispatch) => ({
  getUserChats: () => dispatch(getUserChats()),
});

export default connect(null, mapDispatchToProps)(Rooms);

// export default Rooms;
