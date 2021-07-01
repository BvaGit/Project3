import ModalMyAccountFile from './ModalMyAccountFile';
import { connect } from 'react-redux';
import { avatarPUT, myAccountGET } from '../../../store/users/asyncActions';

const mapStateToProps = (state) => ({
    avatar: state.usersReducer.myAccount.avatar
});

const mapDispatchToProps = (dispatch) => ({
    upAvatar: (data) => dispatch(avatarPUT(data)),
    getMyAccount: () => dispatch(myAccountGET())
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalMyAccountFile);