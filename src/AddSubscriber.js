import React, {Component} from 'react';
import Header1 from './Header1';
import './AddSubscriber.css';

class AddSubscriber extends Component {
    render(){
        return(
            <div>
                <Header1 heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                <form className="subscriber-form">
                    <label htmlFor="name" className="label-control">Name:</label><br/>
                    <input id="name" type="text" className="input-control" name="name"></input><br/><br/>
                    <label htmlFor="phone" className="label-control">Phone:</label><br/>
                    <input type="text" name="phone" className="input-control" id="phone"></input><br/><br/>
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                        <span className="subscriber-info">Name:</span><br/>
                        <span className="subscriber-info">Phone:</span>
                    </div>
                    <button type="submit" className="custom-btn btn">Add</button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;