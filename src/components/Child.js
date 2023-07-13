import React from "react";

const Child = ({showModal,setShowModal}) => {
   
  return (
    <div className="child">
        <h2>Child Component</h2>
        <button onClick={()=>setShowModal(!showModal)} >Show Modal</button>
        {showModal && 
        <div>
            <h3>Modal Content</h3>
            <h3>This is modal content</h3>
        </div>}
        
    </div>
  )
}

export default Child