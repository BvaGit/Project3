import { connect } from "react-redux";

import ModalCreateChat from "./ModalCreateChat";

import { createChat, sendParticipants } from "../../store/rooms/asyncActions";
import { getUsersFromApi } from "../../store/users/asyncActions";
import { getUsersFromStore } from "../../store/users/selectors";

const mapStateToProps = (state) => ({
  users: getUsersFromStore(state),
});

const mapDispatchToProps = (dispatch) => ({
  createChat: (payload) => dispatch(createChat(payload)),
  sendParticipants: (payload) => dispatch(sendParticipants(payload)),
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateChat);
