import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './user/Dashboard'
import DashboardSeller from './user/DashboardSeller'
import NewHome from './homes/NewHome'
// Components
import TopNav from './components/TopNav'
import PrivateRoute from './components/PrivateRoute'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/homes/new' component={NewHome} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute
          exact
          path='/dashboard/seller'
          component={DashboardSeller}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
