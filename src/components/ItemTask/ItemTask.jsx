import React from 'react'

const ItemTask = ({items}) => {

  return items.map(item => {
            return <div class='container text-center mt-2 ml-2'>
              <div className='row'>
                  <p>{item.text}</p>
                  {/* <div class='order-first first-low mt-2'>
                      <ul id='list-low' class='list-group pt-3 pb-3 mt-1'></ul>
                  </div>
                  <div class='second-medium mt-2'>
                      <ul id='list-medium' class='list-group pt-3 pb-3 mt-1'></ul>
                  // </div>
                  <div class='order-last third-high mt-2'>
                      <ul id='list-high' class='list-group pt-3 pb-3 mt-1'></ul>
                  </div> */}
              </div>
          </div>
        })
}

export default ItemTask;