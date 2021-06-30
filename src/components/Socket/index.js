import { connect } from "react-redux";

import ConnectSocket from "./Socket";

import { setSocketEmit } from "../../store/rooms/actions";

const mapDispatchToProps = (dispatch) => ({
  setSocketEmit: (payload) => dispatch(setSocketEmit(payload)),
});

export default connect(null, mapDispatchToProps)(ConnectSocket);
