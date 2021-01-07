import React from "react";

const button = (props) => {
  return (
    <div style={{padding: 10}}>
      <button
        className={props.className}
        disabled={props.disabled}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </div>
  );
};

export default button;
