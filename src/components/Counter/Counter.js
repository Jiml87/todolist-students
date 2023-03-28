import React from "react"

import "./Counter.scss"

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  onClickOut = (e) => {
    console.log("onClickOut", e)
  }

  componentDidMount() {
    // api
    console.log("componentDidMount")
    document.addEventListener("click", this.onClickOut)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    document.removeEventListener("click", this.onClickOut)
  }

  static getDerivedStateFromProps(props, state) {
    // this
    console.log("getDerivedStateFromProps", props, state)
    if (props.title === "Height" && state.counter === 0) {
      return { counter: 10 }
    } else {
      return null
    }
  }

  onIncreaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    // console.log("render " + this.props.title)
    return (
      <div>
        <h1>
          {this.props.title}: {this.state.counter}
        </h1>
        <div>
          <button
            type="button"
            className="btn btn-primary"
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
