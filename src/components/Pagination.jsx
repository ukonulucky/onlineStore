import React, { useState, useEfffect, useEffect } from 'react';
import "../styles/Pagination.css"
import { useHistory } from "react-router-dom"
export default function Pagination() {
  let [i,seti] = useState(0)
  useEffect(() => {
   handleRoutine()
  })
 const history = useHistory()
  const handleRoutine = () => {
  
    if (i === 0) {
      history.push("/")
    } else if (i === 1) {
      history.push("/home_2")
    } else if ( i === 2) {
      history.push("/home_3")
    }
   

   }
  
 
    return <div className="page">
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="disabled">
            <button onClick={() => { seti(i--) } }  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
            </button>
          
    </li> 
          <li class="active"><button onClick={() => { seti(0)} }   class="page-link" >1</button></li>
          <li ><button onClick={() => { seti(1)} }   class="page-link" >2</button></li>
          <li><button onClick={() => { seti(2)} }  class="page-link" >3</button></li>
    <li>
      <button onClick={() => { seti(i++)} }  href={i} aria-label="Next">
         <span aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
  </div>;
}
