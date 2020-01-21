import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import {
  CardDiv,
  CardImage,
  CardFront,
  CardNumber,
  CardName,
  CardExpiry,
  CardRear
} from "./components/Card";
import {
  FormDiv,
  FormData,
  FormCardName,
  FormCardNumber,
  FormInline,
  ExpiryDate,
  CVV
} from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardDiv>
          <CardImage />
          <CardNumber />
          <CardName />
          <CardExpiry />
        </CardDiv>
        <FormDiv>
          <FormData>
            <FormCardName />
            <FormCardNumber />
            <FormInline>
              <ExpiryDate />
              <CVV />
            </FormInline>
          </FormData>
        </FormDiv>
      </Wrapper>
    );
  }
}

export default App;
