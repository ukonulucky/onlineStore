import React, { useState } from 'react';

function Input() {
        const [input, setInput] = useState(0)
    return <div>
        <input type="number" name="input" onChange={
                      (e) => {
                            setInput(e.target.value)
                      }
                   } />
  </div>;
}

export default Input;
