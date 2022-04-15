import './App.css';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/listpage' component={ListPage}></Route>
        <Route exact path='/detailpage' component={DetailPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
