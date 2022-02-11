import React, { useState } from 'react'
import {useDispatch } from "react-redux"
import "../styles/Product.css"
import Sizes from "./Sizes"
import Quantity from "./Quantity"
import StarIcon from '@mui/icons-material/Star';
function Product({ title, rating, price, description, image, id }) {
   
    const [item, setItem] = useState({
        unClick: "Add To Basket",
    })
    const handleItem = () => {
        setItem({
        unClick:"Item Added"
    })
   }
   
    const [Qty, setQty] = useState(1)
    const intValue = Math.abs(parseInt(Qty,10))
    const dispatch = useDispatch()
     const addItem = () => {
        return {
            type: "ADD_TO_BASKET",
        item:{
            title: title,
            id: id,
            rating: rating,
            price: parseInt(price * intValue,10) ,
            description: description,
            image: image
           
        }
       }
    }
    

    const [buttonState, setButtonState] = useState(false)
    return (
        <div className="product">
            <div className="product_info" >
                <p>{title}</p>
                <Sizes />
                <Quantity setQty = {setQty } Qty={ Qty }/>
                <div className="amount">
                <small>$</small>
                    <strong>{ intValue > 0 ? (price * intValue).toFixed(2) : price }</strong>
                </div>
                <div className="product_rating shake-slow">
                    {
                     Array(rating).fill().map((_,i) =>
                     { return (<span key={ i } className="star"><StarIcon  /> </span>)})
                    }
                </div>
                <img src={image} alt="shoe" />
                <button className="btn shake-slow"
                    type ='button' onClick={() => {
                        dispatch(addItem())
                        handleItem()
                }} >{ item.unClick }</button>
            </div>
            
            
        </div>
    )
}

export default Product
