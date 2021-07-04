import { connect } from 'react-redux';

import Settings from "./Settings";
import { handleLanguage } from '../../store/localization/actions';
import { changeMyAccountField } from '../../store/user/actions';
import { updateMyAccount } from '../../store/user/asyncActions';
import { getUserMyAccount } from '../../store/user/selectors';

const mapDispatchToProps = (dispatch) => ({
    handleLanguage: (payload) => dispatch(handleLanguage(payload)),
    updateAccount: () => dispatch(updateMyAccount()),
    changeAccountField: (data) => dispatch(changeMyAccountField(data)),
})

const mapStateToProps = (state) => ({
    account: getUserMyAccount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
