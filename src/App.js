import React, { Component } from "react";
import Header1 from "./Header1";
import "./App.css"

class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: "Sonja",
        phone: 2222222222 
      },
      {
        id:2,
        name: "Zlatko",
        phone: 1111111111
      }
    ]
    
    return (

      <div>
        <Header1 />
        <button className="btn">Add</button>
        <div className="phoneListGrid">
          <span className="grid-item">Name</span>
          <span className="grid-item">Phone</span>
        </div> 

        {
        subscribers.map(sub => {
          return  <div key={sub.id} className="phoneListGrid">
              <span>{sub.name}</span>
              <span>{sub.phone}</span>
              <button className="delBtn">Delete</button>
            </div>
          
        })
        } 
    
      </div>
    );
    
  }
}



export default App;
