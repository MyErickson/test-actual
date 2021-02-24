import { connect } from 'react-redux';
import Home from '../components/Home';
import { get_User_Action  } from '../store/actionCreator/Home';

const mapStateToProps = state => ({
    info_User: state.info_User,
});

const mapDispatchToProps = dispatch => ({
    user_Action: (id) => {
    dispatch(get_User_Action(id));
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
