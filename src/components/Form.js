import React from "react";
import "../App.css";

export function FormDiv(props) {
return <div className="form common">{props.children}</div>;
}

export function FormData(props) {
  return (
    <form className="form-data">
      <label className="form-data-label-block">
        Card Number
        <input type="text" placeholder="Credit Card Number" />
      </label>
      <label className="form-data-label-block">
        Card Name
        <input type="text" placeholder="Card Holder Name" />
      </label>
      <div className="form-data-div-inline">
        <label>
          Expiration Date
          <input type="text" placeholder="Month"/>
          <input type="text" placeholder="Year" />
        </label>
        <label>
          CVV
          <input type="text" />
        </label>
      </div>
    </form>
  );
}
