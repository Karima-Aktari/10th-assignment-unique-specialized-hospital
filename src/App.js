import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home'
import Departments from './Pages/Home/Departments/Departments';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Specialists from './Pages/Home/Specialists/Specialists';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/department">
              <Departments />
            </PrivateRoute>
            <PrivateRoute path="/specialist">
              <Specialists />
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
