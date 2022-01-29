import React, { useState } from 'react'

import "../styles/Sizes.css"
const Sizes = () => {
    const [size, setSize] = useState("md")
  return (
      <div className="sizes">
          <select id="inputState" name="form-control"  onChange={(e) => {
              setSize(e.target.value)

          } } >
 <option value="md">Medium size</option>
   <option value="lg">Large size</option>
   <option value="sm">Small Size</option>
   <option value="xlg">X-Large</option>
 <option value="X-small">X-Small size</option>
  
</select>
    </div>
  );
}

export default Sizes 