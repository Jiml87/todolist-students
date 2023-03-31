import React from 'react'

const CreateTask = (props) => {
  const [searchItem, setSearchItem] = React.useState({value: '', name: ''});

  const handleSearchInput = (value, name) => setSearchItem({value, name});
  return (
            <div className='container'>
            <div className='row'>
              <div className='col-9'>
                <input 
                    name='search' 
                    value={searchItem.value} 
                    onChange={({target: {value, name}}) => handleSearchInput(value, name)} 
                    type='text' 
                    className='g-col-11 task-input form-control' 
                />
                <button className='sort' type='button'>
                  A-Z
                </button>
              </div>
              <div className='col-3'>
                <button 
                    onClick={() => {
                      const {value, name} = searchItem;
                      props.addTask({value, name});
                      setSearchItem({value: '', name: ''})
                    }} 
                    className='g-col-1 task-button btn btn-success'
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )
}

export default CreateTask;