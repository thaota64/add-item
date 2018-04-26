import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };

        // props.onClickEdit = App.handleEdit
    }

    render() {
        const items   = this.props.items;
        const elmItem = items.map((item, index)=> {
            return (
                <Item 
                    key={index} 
                    item={item} 
                    index={index} />
            );
        });

        return (
            <div className="panel panel-success">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            
                        </tr>
                    </thead>
                    <tbody>{elmItem}</tbody>
                </table>
            </div>
        );
    }
}

export default List;
