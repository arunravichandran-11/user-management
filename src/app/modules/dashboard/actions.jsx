import {userService} from '../../services/user.service';
import {history} from '../../services/history';

const dashboardActions = {
  /**
   * FETCHES all existing users
   * dispatches the action to reducer function
   */
  getAll: () => {
    return (dispatch) => {
      userService.getAll().then(
        (users) => {
          console.log('here- iser');
          dispatch({type: 'GETALL_USER_SUCCESS', users});
          dispatch({type: 'NOTIFY_SUCCESS', message: users});
        },
        (error) => {
          console.log('here- error');
          dispatch({type: 'GETALL_USER_FAIL', error});
          dispatch({type: 'NOTIFY_ERROR', message: error});
          history.push('/login');
        }
      );
    };
  },
};

export default dashboardActions;
