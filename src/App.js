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
  state = {
    front: true
  };

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    return (
      <Wrapper>
        <CardDiv handleClick={this.handleClick}>
          <CardImage />
          {this.state.front ? (
            <CardFront>
              <CardNumber />
              <CardName />
              <CardExpiry />
            </CardFront>
          ) : (
            <CardRear />
          )}
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
