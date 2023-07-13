import React from "react";

const Child = ({showModal,setShowModal}) => {
   
  return (
    <div className="child">
        <h2>Child Component</h2>
        <button onClick={()=>setShowModal(!showModal)} >Show Modal</button>
        {showModal && 
        <div>
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
        </div>}
        
    </div>
  )
}

export default Child