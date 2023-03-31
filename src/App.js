import React from "react"

import Counter from "./components/Counter/Counter"
import "./App.scss"

import CreateTask from './components/CreateTask/CreateTask';
import ItemTask from './components/ItemTask/ItemTask';
import { LOW_PRIORITY } from './constants';

class App extends React.Component {
  state = {
    isCounter: true,
    items: [], 
    text: '', 
    removingItemId: null
  }

  onToggle = () => {
    this.setState({ isCounter: !this.state.isCounter })
  }

  addTask = ({ value, name }) => {
    let newTask = {
      id: Date.now().toString(),
      text: value,
      priority: LOW_PRIORITY,
    };
    console.log('%c So Important 🧠 AnnulusConfigurationTable', 'color: #b198fb; font-weight: bold; background: #8e238a;');
    console.log({state: this.state});
    this.setState({ 
      ...this.state,
      items: [...this.state.items, newTask]
    });
  }

  render() {
    const {items} = this.state;
    
    return (
      <div className="App">
        <CreateTask addTask={this.addTask} />
        <ItemTask items={items} />
        {/* <div>
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
        )} */}
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
