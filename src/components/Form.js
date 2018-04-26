import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

    }

    handleSubmit(event) {
        let item = {
            name: this.state.name,
        };

        this.props.onClickSubmit(item);
        event.preventDefault();
    }

    render() {
        
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">

                        <div className="form-group">
                            <input value={this.state.name}  onChange={this.handleChange} name="name" type="text" className="form-control" placeholder="Name" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
