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
import SearchBar from "./SearchBar";
import BookData from "./Data.json";



function App() {

  return (

    <>
    
      <Router>
     
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
            <div className="app">
      <SearchBar placeholder="Search a Book Name..." data={BookData} />
    </div>
            <Home />
          
          </Route>
          
          
        </Switch>
      

      </Router>
    </>

  );

}
export default App;
