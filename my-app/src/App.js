import Header from "./Header";
import './App.css';
// import Orders from "./Orders";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Buy from "./Buy";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {

  return (

    <>
      <Router>
      <div className ="app">
      <Switch>
          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route>
      
       
          */}
              <Route path="/login">
            <Login />
          </Route>
          <Route path="/buy">
          <Header />
          
              <Buy/>
           
          </Route>
             <Route path="/checkout">
            <Header />
           <Checkout />
           </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>

      </Router>
    </>

  );

}
export default App;
