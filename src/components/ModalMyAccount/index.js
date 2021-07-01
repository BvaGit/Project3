import ModalMyAccount from "./ModalMyAccount";
import { connect } from 'react-redux'

import { myAccountPOST, myAccountGET } from '../../store/users/asyncActions'

const mapStateToProps = (state) => ({
    avatar: state.usersReducer.myAccount.avatar
})

const mapDispatchToProps = (dispatch) => ({
    postMyAccont: () => dispatch(myAccountPOST()),
    getMyAccount: () => dispatch(myAccountGET())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalMyAccount);