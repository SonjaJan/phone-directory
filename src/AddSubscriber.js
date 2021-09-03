import React, {Component} from 'react';
import Header1 from './Header1';
import './AddSubscriber.css';

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            name: "",
            phone: ""
        }
    }
    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(state);
    }
    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.AddSubscriberHandler(this.state);
        this.setState({id: 0, name: '', phone: ''});
    }
    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header1 heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                    <label htmlFor="name" className="label-control">Name:</label><br/>
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangeHandler}></input><br/><br/>
                    <label htmlFor="phone" className="label-control">Phone:</label><br/>
                    <input type="text" name="phone" className="input-control" id="phone" onChange={this.inputChangeHandler}></input><br/><br/>
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                        <span className="subscriber-info">Name:{name}</span><br/>
                        <span className="subscriber-info">Phone:{phone}</span>
                    </div>
                    <button type="submit" className="custom-btn btn">Add</button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;