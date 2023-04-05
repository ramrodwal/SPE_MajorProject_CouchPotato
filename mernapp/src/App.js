
import './App.css';
import Home from './screens/Home';
import{
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';


function App() {
  return (
    //we can send only one div in return and if we want multiple divs we need nested divs
    <Router>
    
    <div>

    <Routes>
      <Route exact path="/" element = {<Home/>}></Route>
      <Route exact path='/Login' element = {<Login/>}></Route>
      <Route exact path='/createuser' element = {<Signup/>}></Route>
    </Routes>

    </div>
    
    </Router>
  );
}

export default App;
