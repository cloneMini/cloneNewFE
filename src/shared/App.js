import './App.css';
import ListPage from '../pages/ListPage';

import DetailPage from '../pages/DetailPage';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Addhost from '../pages/Addhost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/listpage' component={ListPage}></Route>
        <Route exact path='/detailpage/:postId' component={DetailPage}/>
        <Route exact path='/user/login' component={Login}></Route>
        <Route exact path='/user/signUp' component={SignUp}></Route>
        <Route exact path='/addhost' component={Addhost}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
