import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import UserListPage from 'test-app/userList/UserListPage'
// import UserAddPage from 'test-app/userAdd/UserAddPage'
import UserEditPage from 'test-app/userEdit/UserEditPage'


const routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={UserListPage}/>
            <Route path="/edit/:id?" component={UserEditPage}/>
            <Route component={() => <div>не сюда</div>}/>
        </Switch>
    </Router>
)

export default routes

//<Route path="/add" component={UserAddPage}/>