const DashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETALL_USER_SUCCESS':
      return {
        users: action.users,
      };
    case 'GETALL_USER_FAIL':
      return {
        error: action.message,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
