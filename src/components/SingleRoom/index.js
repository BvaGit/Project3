import { connect } from "react-redux";

import SingleRoom from "./SingleRoom";

import { getChatMessages } from "../../store/rooms/asyncActions";

const mapDispatchToProps = (dispatch) => ({
  getChatMessages: (chatId) => dispatch(getChatMessages(chatId)),
});

export default connect(null, mapDispatchToProps)(SingleRoom);
