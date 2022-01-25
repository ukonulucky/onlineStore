 import { store } from "./components/reduxStore/reducer"
 import { Provider } from "react-redux"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Home from "./components/Home"
import Home2 from "./components/Home2"
import Home3 from "./components/Home3"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Userinfo from "./components/User_Info";
import Pagination from "./components/Pagination";
import Bootstrap from "./components/Bootstrap";
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <div className="navbar2">
            <Switch>
            <Route exact path = "/delivery_details">
                <Bootstrap />
              </Route>
              <Route exact path = "/payment_platform">
                <Userinfo />
              </Route>
              <Route exact path="/">
              <Header />
                <Home />
                <Pagination  />
              </Route>
              <Route exact path="/home_2">
              <Header />
                <Home2 />
                <Pagination />
              </Route>
              <Route exact path="/home_3">
              <Header />
                <Home3 />
                <Pagination />
              </Route>
              <Route exact path="/checkout">
              <Header />
             <Checkout />
              </Route>
              <Route exact path="/form">
               <Bootstrap />
            </Route>
              <Route>
              <Header />
                <h2>Page Not Found</h2>
              </Route>
             
        </Switch>
      </div>
      </div>
    </Router>
      </Provider>
    
  );
}

export default App;
