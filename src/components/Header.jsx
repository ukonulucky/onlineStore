import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../utils/images/logo.jpg"
import { Link } from "react-router-dom"

function Header() {
    const basket = useSelector(state => state.basket)
    return (
        <div className="header">
            <Link to="/" >
            <img
                className="header_logo"
                src={ logo }
                alt="logo"
            />
              </Link>
            {/* <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text" placeholder="Search For Your Favourite Items...."
                />
                <SearchIcon
                    className="header_searchIcon"
                />
            </div> */}
            <div className="header_nav">
                <div className="header_option">
                    
                    <Link to="/checkout" className="login">
                
                    <span className="header_optionLineTwo">
                    Home Of Quality Fashion
                    </span>
                    </Link>
    
                </div>
                <div className="header_option">
              
                   
                    <span className="header_optionLineOne">
                       
                    <a href="https://www.shein.com/" target="_blank">  Fashion   </a>
                    </span>
                    <span className="header_optionLineTwo">
                    <a href="https://www.shein.com/" target="_blank">   & Zones   </a>
                    </span>
                  
                </div>
                <div className="header_option">
                <span className="header_optionLineOne">
                        <a href="https://fashionschooldaily.com/" target="_blank" >
                        News
                    </a>
                      
                    </span>
                    <span className="header_optionLineTwo">
                    <a href="https://fashionschooldaily.com/" target="_blank" >
                    & Trends 
                    </a>
                      
                     
                    </span>  
                </div>
                <div className="header_optionBasket">
                    <Link to="/checkout" >
                        <span className="header_optionBasket">
                        <ShoppingBasketIcon />
                        </span>
                    
                    </Link>
                    <span className="header_optionLineTwo header_basketCount">
                        { basket?.length }
                </span>
                </div>
                
            </div>
        </div>
    )
}

export default Header
