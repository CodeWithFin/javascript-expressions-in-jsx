import React from "react";
import ReactDOM from "react-dom";

const fName = "Finley";
const lName = "Mwangola";
const num = 12;
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your Lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
