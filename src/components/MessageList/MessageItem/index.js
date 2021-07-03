import { connect } from "react-redux";

import MessageItem from "./MessageItem";
import { getUserAvatar, getUserName, getUserID } from '../../../store/user/selectors';

const mapStateToProps = (state) => ({
    userId: getUserID(state),
    avatar: getUserAvatar(state),
    name: getUserName(state)
})


export default connect(mapStateToProps)(MessageItem);
