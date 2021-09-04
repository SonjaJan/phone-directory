import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscribersList: [
        {
                id:1,
                name: 'Sonja',
                phone: '55555555555555'
        },
        {
            id: 2,
            name: 'Zlatko',
            phone: '666666666666'
        }
            ]
        }
    }

    AddSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0){
           newSubscriber.id =  subscribersList[subscribersList.length-1].id +1;
        }else {
            newSubscriber.id =1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList: subscribersList});
    }
    render(){
        return(
           // <AddSubscriber AddSubscriberHandler={this.AddSubscriberHandler}/>
           //<ShowSubscribers subscribersList={this.state.subscribersList}/>
           <Router>
               <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} />} />
               <Route exact path="/add" render={({history},props) => <AddSubscriber history={history} {...props} AddSubscriberHandler={this.AddSubscriberHandler}/>} />
           </Router>
        )
    }
}

export default PhoneDirectory;