import React from "react";

const Child = ({showModal,setShowModal}) => {
   
  return (
    <div className="child">
        <h2>Child Component</h2>
        <button onClick={()=>setShowModal(!showModal)} >Show Modal</button>
        {showModal && 
        <div>
            <h1>Modal Content</h1>
            <p>This is modal content</p>
        </div>}
        
    </div>
  )
}

export default Child