//@flow
import React, { Component } from "react";
import TextField from "./TextField";

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <TextField label="name" />
        <TextField label="surname" />
      </div>
    );
  }
}

export default App;
