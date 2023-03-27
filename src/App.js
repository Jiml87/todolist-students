import React from 'react';

import Counter from './components/Counter/Counter';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log('render App');
    return (
      <div id='app' class='pt-4'>
        <div class='wrapper'>
          <div class='container'>
            <div class='row'>
              <div class='col-9'>
                <input
                  onChange={this.handleChange}
                  value={this.state.text}
                  type='text'
                  class='g-col-11 task-input form-control'
                />
                <button class='sort' type='button'>
                  A-Z
                </button>
              </div>
              <div class='col-3'>
                <button class='g-col-1 task-button btn btn-success'>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <div class='container text-center mt-2 ml-2'>
            <div class='row'>
              <div class='order-first first-low mt-2'>
                <ul id='list-low' class='list-group pt-3 pb-3 mt-1'></ul>
              </div>
              <div class='second-medium mt-2'>
                <ul id='list-medium' class='list-group pt-3 pb-3 mt-1'></ul>
              </div>
              <div class='order-last third-high mt-2'>
                <ul id='list-high' class='list-group pt-3 pb-3 mt-1'></ul>
              </div>
            </div>
          </div>
          <div class='removing'>
            <div class='wind shadow mb-5 bg-body rounded'>
              <div class='body h5'>It will be removed</div>
              <div class='footer p-3'>
                <button type='button' class='btn btn-primary ms-3 close-wind'>
                  Close
                </button>
                <button
                  type='button'
                  class='btn btn-warning ms-3 remove-wind-button'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className="App">
      //   <Counter title="Height" buttonName="Increase height" />
      //   <hr />
      //   <Counter title="Width" buttonName="Increase width" />
      // </div>
    );
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

export default App;
