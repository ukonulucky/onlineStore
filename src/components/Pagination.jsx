import React, { useState, useEfffect, useEffect } from 'react';
import "../styles/Pagination.css"
import { useHistory, useLocation } from "react-router-dom"
export default function Pagination() {
  const urlArray = ["/","/home_2","/home_3"]
  const history = useHistory()
  const presentUrl = useLocation()
  const changeUrl = () => {
  
    if (urlArray[0] === presentUrl.pathname ) {
      history.push("/home_2")
    } 
  if (urlArray[1] === presentUrl.pathname) {
      history.push("/home_3")
    } 

   }

   const changeUrl2 = () => {
  
    if (urlArray[1] === presentUrl.pathname ) {
      history.push("/")
    } 
  if (urlArray[2] === presentUrl.pathname) {
      history.push("/home_2")
    } 

   }
  

 
    return <div className="page">
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="disabled">
            <button onClick={() => {
             changeUrl2()
             } }  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
            </button>
          
    </li> 
          <li class="active"><button  onClick={() => {
              history.push("/") } }  className="page-link" >1</button></li>
        
          <li ><button className="page-link" onClick={() => {
            history.push("/home_2") }}  >2</button></li>
          
          <li><button className="page-link" onClick={() => {
              history.push("/home_3")
            }}>3</button></li>
   
          <li>
           
           
            <button onClick={() => {
              changeUrl()
              
      } }   aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
  </div>;
}
