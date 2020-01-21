import React from "react";
import "../App.css";
import credit from "../credit-background.jpg";

export function CardDiv(props) {
  return <div className="card common" onClick={() => props.handleClick()}>{props.children}</div>;
}

export function CardImage(props) {
  return <img className="card-image" alt="sample" src={credit}></img>;
}

export function CardFront(props) {
  return <div>{props.children}</div>
}

export function CardNumber(props) {
  return <div className="cardnumber common-card">XXXX XXXX XXXX XXXX</div>;
}

export function CardName(props) {
  return (
    <div className="cardname common-card">
      <div>Card Holder</div>
      <div>Full Name</div>
    </div>
  )
}

export function CardExpiry(props) {
  return (
    <div className="expirydate common-card">
      <div>Expiry Date</div>
      <div>MM/YY</div>
    </div>
  )
}

export function CardRear(props) {
  return <div>This is the rear side</div>
}
