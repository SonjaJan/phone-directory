import React, { Component } from "react";
import Header1 from "./Header1";
import "./ShowSubscribers.css"
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  render() {
   
    let studentsInfo = [
      {
          roll: 1,
          name: 'Alex',
          scores: {
              mathematics: 90,
              english: 80,
              science: 95
          }
      },
      {
          roll: 2,
          name: 'Ben',
          scores: {
              mathematics: 85,
              english: 60,
              science: 70
          }
      },
      {
          roll: 3,
          name: 'Cathy',
          scores: {
              mathematics: 86,
              english: 75,
              science: 98
          }
      },
      {
          roll: 4,
          name: 'Daisy',
          scores: {
              mathematics: 71,
              english: 67,
              science: 64
          }
      },
      {
          roll: 5,
          name: 'Ema',
          scores: {
              mathematics: 94,
              english: 73,
              science: 70
          }
      },
      {
          roll: 6,
          name: 'Flora',
          scores: {
              mathematics: 97,
              english: 85,
              science: 93
          }
      }
    ];
    
    function displayAllScoreCards() {
     
    
      // TODO 1: Remove the hard-coded card template and use it as a reference only to render individual score cards into the DOM
     return studentsInfo.map( student => {
          return <div className="scorecard" key={student.roll}>
                  <div className="card">
                      <article>
                          <h1>{student.name}</h1>
                          <span>Mathematics: {student.scores.mathematics}</span><br />
                          <span>English: {student.scores.english}</span><br />
                          <span>Science: {student.scores.science}</span>
                      </article>
                  </div>
              </div>
      });
      /*return <div className="scorecard">
          <div className="card">
              <article>
                  <h1>Student Name</h1>
                  <span>Mathematics: Score</span><br />
                  <span>English: Score</span><br />
                  <span>Science: Score</span>
              </article>
          </div>
      </div>*/
    
      // TODO 2: Use map method to iterate over studentsInfo array defined above to render all six score cards dynamically
    
    }

    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Sonja",
    //     phone: 2222222222 
    //   },
    //   {
    //     id:2,
    //     name: "Zlatko",
    //     phone: 1111111111
    //   }
    // ]
    
    return (

      <div>
        <Header1 heading="Phone Directory"/>
        <Link to="./add"><button className="btn">Add</button></Link>
        <div className="phoneListGrid">
          <span className="grid-item">Name</span>
          <span className="grid-item">Phone</span>
        </div> 

        {
        this.props.subscribersList.map(sub => {
          return  <div key={sub.id} className="phoneListGrid">
              <span>{sub.name}</span>
              <span>{sub.phone}</span>
              <button className="delBtn" >Delete</button>
            </div>
          
        })
        } 

        <div className="main-container">
            <div className="heading-container">
                <h2>Students Score Cards</h2>
            </div>

            <div className="scorecards-container">
                {displayAllScoreCards()}
            </div>
        </div>
    
      </div>
    );
    
  }
}



export default ShowSubscribers;