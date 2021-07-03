import { connect } from "react-redux";

import ConnectSocket from "./Socket";

import { setSocketEmit } from "../../store/rooms/actions";
import { setNewRoom, setNewMessage } from "../../store/rooms/actions";
import { getUserID } from "../../store/user/selectors";
import { getActiveRoom } from "../../store/rooms/selectors";
import { getUsersFromApi } from "../../store/users/asyncActions";

const mapStateToProps = (state) => ({
  chatId: getActiveRoom(state),
  userId: getUserID(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
  setSocketEmit: (payload) => dispatch(setSocketEmit(payload)),
  setNewRoom: (payload) => dispatch(setNewRoom(payload)),
  setNewMessage: (payload) => dispatch(setNewMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectSocket);
