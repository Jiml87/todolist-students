import React from "react";

import Counter from "./components/Counter/Counter";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.a = "Hello";
    // this.state = {
    //   title: "Hello world",
    // };
  }

  render() {
    console.log("render App");
    return (
      <div className="App">
        <Counter title="Height" buttonName="Increase height" />
        <hr />
        <Counter title="Width" buttonName="Increase width" />
      </div>
    );
  }
}

// DZ
// Make layout of dotolist
// 3 types of tasks by priority
// * Make Task item as separated component

export default App;
