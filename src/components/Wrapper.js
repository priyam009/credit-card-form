import React from "react";
import "../App.css";

function Wrapper(props) {
  return (
<div className="background">{props.children}</div>
  );
}

export default Wrapper;