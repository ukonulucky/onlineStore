import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Pagination.css"
import { Link } from "react-router-dom"
export default function Pagination() {
  const pageArray  = ["/","/home_2","home_3"]

    return <div className="page">
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="disabled">
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
            </a>
            
    </li> 
          <li class="active"><a href={ pageArray[0]} class="page-link" >1</a></li>
          <li ><a href={ pageArray[1]} class="page-link" >2</a></li>
          <li><a href={ pageArray[2]} class="page-link" >3</a></li>
    <li>
      <a href="#" aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>;
}
