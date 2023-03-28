import React from "react"

import "./Counter.scss"

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  onIncreaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    console.log("render " + this.props.title)
    return (
      <div>
        <h1>
          {this.props.title}: {this.state.counter}
        </h1>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.onIncreaseCounter}
          >
            {this.props.buttonName}
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
