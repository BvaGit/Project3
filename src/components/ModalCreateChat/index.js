import { connect } from "react-redux";

import ModalCreateChat from "./ModalCreateChat";

import { createChat, sendParticipants } from "../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../store/users/asyncActions";
import { getUsersForDropdown } from "../../store/users/selectors";
import { getUserID } from "../../store/user/selectors";

const mapStateToProps = (state) => ({
  users: getUsersForDropdown(state),
  userId: getUserID(state),
});

const mapDispatchToProps = (dispatch) => ({
  createChat: (payload) => dispatch(createChat(payload)),
  sendParticipants: (payload) => dispatch(sendParticipants(payload)),
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateChat);
