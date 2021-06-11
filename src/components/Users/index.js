import { connect } from "react-redux";

import { getUsersFromApi } from "/src/store/users/asyncActions";
import { getUsersFromStore } from "/src/store/users/selectors";

import Users from "./Users";

// заглушка

const mapStateToProps = (state) => ({
  users: getUsersFromStore(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromApi: (payload) => dispatch(getUsersFromApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
