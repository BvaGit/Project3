import RoomsHeader from "./RoomsHeader";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    fname: state.usersReducer.myAccount.firstname,
    avatar: state.usersReducer.myAccount.avatar
})


export default connect(mapStateToProps)(RoomsHeader) ;