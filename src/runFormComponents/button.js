import React from "react";

const button = props => {
  console.log(props.style);
  return (
    <button 
      style={props.style}
      varient={props.varient}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default button;