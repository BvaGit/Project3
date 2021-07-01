import { connect } from "react-redux";

import MessageItem from "./MessageItem";

import { getUserID } from "../../../store/user/selectors";

const mapStateToProps = (state) => ({
  userId: getUserID(state),
});

export default connect(mapStateToProps)(MessageItem);
