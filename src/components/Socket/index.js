import ConnectSocket from "./Socket";
import { connect } from "react-redux";
import { setSocketEmit } from "../../store/rooms/actions";

const mapDispatchToProps = (dispatch) => ({
  setSocketEmit: (payload) => dispatch(setSocketEmit(payload)),
  // recived message
  // create room
  // online/ offline
});



export default connect(null, mapDispatchToProps)(ConnectSocket);
