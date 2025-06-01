// Button.js
import React from "react";
import ReactDOM from "react-dom";

const Button = ({ text, onClick }) => {
  if (text == "Forward") {
    console.log("This is moving forward");
    return (
      <button onClick={onClick.IncrementItem} className="Forward">
        {text}
      </button>
    );
  } else {
    console.log("This is moving backward");
    return (
      <button onClick={onClick.DecreaseItem} className="Backward">
        {text}
      </button>
    );
  }
};

export default Button;
