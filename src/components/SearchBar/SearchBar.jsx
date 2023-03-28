import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        // this.addTask = this.addTask.bind(this);
    }

    state = { value: '', name: '' }

    handleSearchInput = ev => this.setState({value: ev.target.value, name: ev.target.name});

    render() {
        const {value, name} = this.state;
        console.log({value});

        return (
            <div class='container'>
            <div class='row'>
              <div class='col-9'>
                <input 
                    name='search' 
                    value={value} 
                    onChange={this.handleSearchInput} 
                    type='text' 
                    class='g-col-11 task-input form-control' 
                />
                <button class='sort' type='button'>
                  A-Z
                </button>
              </div>
              <div class='col-3'>
                <button 
                    onClick={() => this.props.addTask({value, name})} 
                    class='g-col-1 task-button btn btn-success'
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )
    }
};

export default SearchBar