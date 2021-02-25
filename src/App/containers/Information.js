import { connect } from 'react-redux';
import Information from '../components/Informations/Informations';
import { put_Information } from '../store/actionCreator/Informations';

const mapStateToProps = state => ({
    info_User: state.info_User,
});

const mapDispatchToProps = dispatch => ({
    information_Action: (id) => {
    dispatch(put_Information(id));
  },
});

const InformationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Information);

export default InformationContainer;