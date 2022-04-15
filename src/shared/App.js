import './App.css';
import ListPage from '../pages/ListPage';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import DetailedPage from '../pages/DetailPage';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/postDetail' component={DetailedPage}></Route>
        <Route exact path='/listpage' component={ListPage}></Route>
        <Route exact path='/user/login' component={Login}></Route>
        <Route exact path='/user/signUp' component={SignUp}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
