import React from 'react';

import Counter from './components/Counter/Counter';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ListItem from './components/ListItem/ListItem';
import { LOW_PRIORITY } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { items: [], text: '', removingItemId: null };

  addTask({ value, name }) {
    this.state.data.push({
      id: Date.now().toString(),
      text: value,
      priority: LOW_PRIORITY,
    });

    this.setState({ ...this.state, data: this.state.data });
  }

  render() {
    const { items } = this.state;
    console.log('render App');
    return (
      <div id='app' class='pt-4'>
        <SearchBar addTask={this.addTask} />
        <ListItem items={items} />
        <div class='wrapper'>
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
