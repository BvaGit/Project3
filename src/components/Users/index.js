import { connect } from "react-redux";
import Users from "./Users";
import { getUsersFromApi } from "../../store/users/asyncActions";
import { getUsersFromStore } from "../../store/users/selectors";

// заглушка

const mapStateToProps = (state) => ({
  users: getUsersFromStore(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
