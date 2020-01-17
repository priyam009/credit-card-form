import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import { CardDiv, CardImage } from "./components/Card";
import { FormDiv, FormData } from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <CardDiv>
          <CardImage />
        </CardDiv>
        <FormDiv>
          <FormData />
        </FormDiv>
      </Wrapper>
    );
  }
}

export default App;
