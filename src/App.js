import React, { Component } from "react";
import Header1 from "./Header1";

class App extends Component {
  render() {

    
    return (

      <div>
        <Header1 />
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> 
    
      </div>
    );
    
  }
}



export default App;
