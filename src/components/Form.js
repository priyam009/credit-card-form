import React from "react";
import "../App.css";

export function FormDiv(props) {
  return <div className="form common">{props.children}</div>;
}

export function FormData(props) {
  return <form className="form-data">{props.children}</form>;
}

export function CardNumber(props) {
  return (
    <label className="form-data-label-block">
      Card Number
      <input
        className="form-data-input form-data-input-common"
        type="text"
        placeholder="Credit Card Number"
      />
    </label>
  );
}

export function CardName(props) {
  return (
    <label className="form-data-label-block">
      Card Name
      <input
        className="form-data-input form-data-input-common"
        type="text"
        placeholder="Card Holder Name"
      />
    </label>
  );
}

export function FormInline(props) {
  return <div className="form-data-div-inline">{props.children}</div>;
}

export function ExpiryDate(props) {
  return (
    <label>
      Expiration Date
      <div className="form-expiry">
        <input
          type="text"
          className="form-data-input-common"
          placeholder="Month"
        />
        <input
          type="text"
          className="form-data-input-common"
          placeholder="Year"
        />
      </div>
    </label>
  );
}

export function CVV(props) {
  return (
    <label>
      CVV
      <input className="form-data-input form-data-input-common" type="text" />
    </label>
  );
}
