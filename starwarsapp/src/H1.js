import React, { Component } from 'react';
class H1 extends Component {


  render(){
    const show =this.props.show;
    if (show === 'characters'){
      return(
        <div className="head-line">
          <h1>Star Wars Characters</h1>
          <h4> Press on one of the Characters to get more information!</h4>
        </div>
      );
    }
    else if(show === 'Planets'){
      return(
        <div className="head-line">
          <h1>Star Wars Planets</h1>
          <h4> Press on one of the Planets to get more information!</h4>
        </div>
      );
    }
  }
}

export default H1;
