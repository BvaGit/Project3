import ModalMyAccountFile from './ModalMyAccountFile';
import { connect } from 'react-redux';
import { avatarPUT, myAccountGET } from '../../../store/user/asyncActions';
import { getUserAvatar } from '../../../store/user/selectors';

const mapStateToProps = (state) => ({
    avatar: getUserAvatar(state),
});

const mapDispatchToProps = (dispatch) => ({
    upAvatar: (data) => dispatch(avatarPUT(data)),
    getMyAccount: () => dispatch(myAccountGET())
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalMyAccountFile);