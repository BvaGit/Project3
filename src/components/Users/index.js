import { connect } from "react-redux";
import Users from "./Users";
import { getUsersFromApi } from "../../store/usersReducer/actions";
import { getUsersFromStore } from "../../store/usersReducer/selectors";

// заглушка

const mapStateToProps = (state) => ({
  users: getUsersFromStore(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
