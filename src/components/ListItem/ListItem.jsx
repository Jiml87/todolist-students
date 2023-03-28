import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        const {items} = this.props;
        return (
            items.map(item => {
                <div class='container text-center mt-2 ml-2'>
                    <div class='row'>
                        <p>{item.value}</p>
                        {/* <div class='order-first first-low mt-2'>
                            <ul id='list-low' class='list-group pt-3 pb-3 mt-1'></ul>
                        </div>
                        <div class='second-medium mt-2'>
                            <ul id='list-medium' class='list-group pt-3 pb-3 mt-1'></ul>
                        </div>
                        <div class='order-last third-high mt-2'>
                            <ul id='list-high' class='list-group pt-3 pb-3 mt-1'></ul>
                        </div> */}
                    </div>
                </div>
            })
            // <div class='container text-center mt-2 ml-2'>
            //     <div class='row'>
            //     <div class='order-first first-low mt-2'>
            //         <ul id='list-low' class='list-group pt-3 pb-3 mt-1'></ul>
            //     </div>
            //     <div class='second-medium mt-2'>
            //         <ul id='list-medium' class='list-group pt-3 pb-3 mt-1'></ul>
            //     </div>
            //     <div class='order-last third-high mt-2'>
            //         <ul id='list-high' class='list-group pt-3 pb-3 mt-1'></ul>
            //     </div>
            //     </div>
            // </div>
        )
    }
};

export default ListItem