import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';

const uuidv4 = require('uuid/v4');




class App extends Component {
    state = {
        items       : []
    };

    constructor(props) {
        super(props);   
        this.handleSubmit         = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let items = JSON.parse(localStorage.getItem('task')) || [];
        this.setState({
            items       : items,
        })
    }
    handleSubmit(item){
        console.log(item);
        let {items} = this.state;

        items.push({
            id      : uuidv4(),
            name    : item.name
        })

        this.setState({
            items: items
        });

        localStorage.setItem('task', JSON.stringify(items));

    }
    render() {
        let items   = this.state.items;
        let elmForm = <Form 
                        onClickSubmit={this.handleSubmit} 
                    />;
        return (
          <div>

            { elmForm }
            {/* FORM : END */}

            {/* LIST : START */}
            <List 
                items={items}
            />
            {/* LIST : END */}
        </div>
        );
    }
}

export default App;
