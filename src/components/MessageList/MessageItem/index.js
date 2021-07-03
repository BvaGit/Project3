import MessageItem from "./MessageItem";
import { connect } from 'react-redux';
import { getUserAvatar, getUserName } from '../../../store/user/selectors';

const mapStateToProps = (state) => ({
    avatar: getUserAvatar(state),
    name: getUserName(state)
})


export default connect(mapStateToProps)(MessageItem);
