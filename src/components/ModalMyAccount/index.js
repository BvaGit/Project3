import { connect } from 'react-redux'

import ModalMyAccount from "./ModalMyAccount";
import { myAccountPOST, myAccountGET } from '../../store/user/asyncActions';
import { getUserAvatar } from '../../store/user/selectors';

const mapStateToProps = (state) => ({
    avatar: getUserAvatar(state)
})

const mapDispatchToProps = (dispatch) => ({
    postMyAccont: () => dispatch(myAccountPOST()),
    getMyAccount: () => dispatch(myAccountGET())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalMyAccount);