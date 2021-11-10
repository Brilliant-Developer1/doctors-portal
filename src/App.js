
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appointment/Appoinment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <PrivateRoute path="/appointment" >
      <Appoinment/>
      </PrivateRoute>
      <PrivateRoute path="/dashboard" >
      <Dashboard/>
      </PrivateRoute>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register" >
      <Register/>
      </Route>
    </Switch>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
