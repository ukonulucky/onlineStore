import React, {useState, useEffect} from 'react';
import "../styles/Sizes.css"


function Quantity({ setQty, Qty }) {
  
  const hanldeChange = (e) => {
    setQty(parseInt(e.target.value))
  }


  return (
      <div className="sizes">
          <div className="Qty">
          <label>
          <input list="Qty"   name="myBrowser" placeholder="Enter Qty" onChange={
            (e) => {
              hanldeChange(e) 
         }}  /></label>
    <datalist id="Qty"   >
      <option value="1"/>
      <option value="2"/>
      <option value="3"/>
      <option value="4"/>
      <option value="5"/>
    </datalist>

        </div>
      </div>
  )
}

export default Quantity;
