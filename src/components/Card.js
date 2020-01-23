import React from "react";
import "../App.css";
import creditImg from "../credit-background.jpg";

export function CardDiv(props) {
  return <div className="card common">{props.children}</div>;
}

export function CardImage(props) {
  return <img className="card-image" alt="sample" src={creditImg} onClick={() => props.handleClick()}></img>;
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
  return <div>{props.children}</div>
}

export function CardSign(props) {
  return <div className="cardsign common-card"></div>;
}
