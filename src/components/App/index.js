import { connect } from 'react-redux';
import App from "./App";
import { languageValue } from '../../store/localization/selectors';

const mapStateToProps = (state) => ({
    languageValue: languageValue(state)
})

export default connect(mapStateToProps, null)(App);
