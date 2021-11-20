import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  


  return (
    <div className="header">
         <Link to="/">
      <HomeIcon/>
      </Link>

       {/* <div className="header__search">
         <input className="header__searchInput" type="text" />
          <SearchIcon/>  
     </div> */}

       
       
       <div className="header__search">
        {/* <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">
     

     
{/* 
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
      
        </div> */}


        <Link to="/login">
          <div className="header__optionBasket">
          <h>join us</h>
            <span className="header__optionLineTwo header__basketCount">
              {/* {basket?.length} */}
            </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
          <AddShoppingCartIcon/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    
  );
}

export default Header;
