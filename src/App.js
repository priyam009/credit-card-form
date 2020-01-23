import React from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Wrapper from "./components/Wrapper";
import {
  CardDiv,
  CardImage,
  CardFront,
  CardNumber,
  CardName,
  CardExpiry,
  CardRear,
  CardSign
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
    showFront: true,
    showRear: false
  };

  handleClick = () => {
    this.setState({
      showRear: !this.state.showRear,
      showFront: !this.state.showFront
    });
  };

  render() {
    return (
      <Wrapper>
        <CardDiv>
          {/* CSS Transition */}
          <CSSTransition
            in={this.state.showRear}
            timeout={2000}
            classNames="flip"
          >
            {/* Credit Card Background Image */}
            <CardImage handleClick={this.handleClick} />
          </CSSTransition>

          {/* Credit Card Front */}
          {this.state.showFront && (
            <CardFront className="delay">
              <CardNumber />
              <CardName />
              <CardExpiry />
            </CardFront>
          )}

          {/* Credit Card Rear */}
          {this.state.showRear && (
            <CardRear className="delay">
              <CardSign />
            </CardRear>
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
