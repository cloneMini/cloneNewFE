import './App.css';
import ListPage from '../pages/ListPage';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/listpage' component={ListPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
