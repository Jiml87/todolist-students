import React from "react"

import Counter from "./components/Counter/Counter"
import "./App.scss"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCounter: true,
    }
  }

  onToggle = () => {
    this.setState({ isCounter: !this.state.isCounter })
  }

  render() {
    // console.log("render App")
    return (
      <div className="App">
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onToggle}
          >
            Toggle counter
          </button>
        </div>
        {this.state.isCounter && (
          <>
            <Counter
              title="Height"
              buttonName="Increase height"
            />
            <hr />
            <Counter
              title="Width"
              buttonName="Increase width"
            />
          </>
        )}
      </div>
    )
  }
}
// class Todolist extends React.Component {
//   render() {
//     return;
//     <ul>
//       {this.state.data.map((data) => (
//         <li class='list-group-item d-flex justify-content-between align-items-center'></li>
//       ))}
//     </ul>;
//   }
// }
// DZ
// Make layout of dotolist
// 3 types of tasks by priority
// * Make Task item as separated component

export default App
