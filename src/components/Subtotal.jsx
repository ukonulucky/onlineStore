import React from 'react'
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "../styles/Subtotal.css"
import CurrencyFormat from "react-currency-format"
function Subtitle() {
    const history = useHistory()
    const basket = useSelector(state => state.basket)
     let   price = 0
    let cost = () => {
        if (basket.length === 0) {
        return 0
        } else {
            const totalPrice = basket?.map(item => {
              
                return price = (price + parseFloat(item.price))

            })
            return totalPrice[totalPrice.length -1]
    }
    }
       
    const costTotal = cost()
   
  
      
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>  (
                   <>
                        <p>
                            Subtotal ({ basket.length} items): <strong>{ value }</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift & a $3 shipping fee applies.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={costTotal + 3}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            /> 
            <button className="button" onClick={() => {
                history.push("/delivery_details")
            }}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtitle 
