// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
  
  // Define the initial state:
  state = {
    hasBeenClicked: false,
    currentTheme: 'blue'
  }

  handleClick =()=> {

    // to access our new state after it has been updated,
    // can optionally add a callback as a second argument
    this.setState({
      hasBeenClicked: true
    }, () => console.log('callback in setState : ', this.state.hasBeenClicked))
    console.log('in handleClick : ',this.state.hasBeenClicked);
  }

  render(){
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  } 
}

export default ClickityClick