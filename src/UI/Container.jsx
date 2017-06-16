import React from 'react';
import { Route , withRouter, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import TasksContainer from './Tasks/Container';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

class Container extends React.Component {

    render() {

        if(this.props.location.pathname === '/') {
            return (
                <Redirect push to='/tasks' />
            )
        }

        return (
            <div className='container-fluid'>
                <Navbar />
                <Route path='/login' component={Login}/>
                <ProtectedRoute path='/tasks' component={TasksContainer}/>
            </div>
        )
    }
}

export default withRouter(Container);
