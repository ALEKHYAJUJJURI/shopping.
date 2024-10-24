import { useState } from "react";

function Apps() {
    let [cb,setCb]=useState('')
    function abc(){
        setCb('hemmo')
    }
    function abc2(){
        setCb('')
    }
    return (
      <div>
        <button
          onMouseOver={abc}
          onMouseLeave={abc2}
        >
          Hover over me
        </button>
        <p>{cb}</p>
      </div>
    );
  }
  
  export default Apps;
  