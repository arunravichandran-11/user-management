import React, {Component} from 'react';
import {connect} from 'react-redux';
import dashboardActions from './actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class DashboardComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const {users} = this.props;
    return (
      <div style={{border: '1px solid'}}>
        <h1>User List</h1>
        {users && (
          <TableContainer>
            <Table size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell>Email </TableCell>
                  <TableCell align='right'>FirstName</TableCell>
                  <TableCell align='right'>LastName</TableCell>
                  <TableCell align='right'>Gender</TableCell>
                  <TableCell align='right'>Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell component='th' scope='row'>
                      <Typography>{user.email}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.firstName}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.lastName}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.genderme}</Typography>
                    </TableCell>
                    <TableCell align='right'>
                      <Typography>{user.country && user.country.name}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};
const mapDispactchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(dashboardActions.getAll()),
  };
};

const DashboardPage = connect(mapStateToProps, mapDispactchToProps)(DashboardComponent);

export default DashboardPage;
