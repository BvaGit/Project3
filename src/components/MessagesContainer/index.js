import { connect } from "react-redux";

import MessagesContainer from "./MessagesContainer";

import { getRoomById } from "../../store/rooms/selectors";
import { getNewMessage } from "../../store/rooms/selectors";
import { getUsersFromApi } from "../../store/users/asyncActions";
import { getUserLogin } from "../../store/users/selectors";
import { getUserID } from "../../store/user/selectors";

const mapStateToProps = (state, props) => ({
  chat: getRoomById(state, props),
  new_message: getNewMessage(state, props),
  users: getUserLogin(state),
  userId: getUserID(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
