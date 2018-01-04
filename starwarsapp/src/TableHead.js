import React, { Component } from 'react';
class TableHead extends Component {
  render(){
    const show = this.props.show;
    if (show === 'characters'){
      return (
        <thead>
          <tr id="row-1">
            <th scope="col" id="col-1">Name</th>
            <th scope="col" id="col-2">Home Planet</th>
          </tr>
        </thead>
      );
    }
    else if(show === 'Planets'){
      return (
        <thead>
          <tr id="row-1">
            <th scope="col" id="col-1">Name</th>
            <th scope="col" id="col-2">Terrain</th>
            <th scope="col" id="col-2">Population</th>
          </tr>
        </thead>
      );
    }
  }
}





export default TableHead;
