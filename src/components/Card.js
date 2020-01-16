import React from "react";
import "../App.css";
import credit from "../credit-background.jpg";


export function CardDiv(props) {
  return <div className="card common">{props.children}</div>;
}

export function CardImage(props) {
  return <img className="card-image" alt="sample" src={credit}></img>;
}
