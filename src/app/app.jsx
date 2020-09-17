import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {history} from './services/history';

import LoginPage from './modules/login';
import RegisterPage from './modules/register';
import DashBoardPage from './modules/dashboard';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import './app.scss';

class App extends React.Component {
  /**
   * renders the base app component
   * Important!: can be changed as functional component little later.
   */
  render() {
    const {notify} = this.props;
    return (
      <div className='root-container col-sm-9 col-md-8 col-lg-6 col-xs-12'>
        <div className=''>
          <div className=''>
            {notify.type == 'error' && (
              <Alert severity={notify.type} action={<Button color='inherit' size='small'></Button>}>
                {notify.message}
              </Alert>
            )}

            <Router history={history}>
              <Switch>
                {/* <PrivateRoute exact path='/' component={DashBoardPage} /> */}
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/dashboard' component={DashBoardPage} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const notify = state;
  return notify;
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};