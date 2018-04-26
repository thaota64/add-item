import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        const {item} = this.props;
        const {index} = this.props;

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
            </tr>
        );
    }
}

export default Item;
