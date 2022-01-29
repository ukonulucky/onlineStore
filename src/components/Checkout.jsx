import React from 'react'
import { useSelector } from "react-redux"
import "../styles/Checkout.css"
import Subtotal from './Subtotal'
import logo from "../utils/images/logo.svg"
import Product2 from './Product2'


function Checkout() {
    
    const basket = useSelector(state => state.basket)

    
    const basket2 = basket.length > 0 ? (
            basket.map((item, index) => {
                return <div key={index}>
                    <Product2 price={item.price} title={item.title} description={item.description} rating={item.rating} image={item.image} id={ item.id } comment={"Remove From Basket"}  />
                    </div>
                
            })) : (
            <div>
                No Item Found In Basket. 
            </div>
            )
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src={logo} className="checkout_adv" alt="advert" />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    { basket2 }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
