import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import { CardDiv, CardImage } from "./components/Card";
import {
  FormDiv,
  FormData,
  CardName,
  CardNumber,
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
        </CardDiv>
        <FormDiv>
          <FormData>
            <CardName />
            <CardNumber />
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
