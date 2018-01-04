import React, { Component } from 'react';
import TableRow from './TableRow';

class TableBody extends Component {
  render(){
    const show = this.props.show;
    const people = this.props.people;
    return(
      <tbody>
      {
        people.map((p) =>{
          return (
            <TableRow key={p.url} character={p} show={show} />
          );
        })
      }
      </tbody>
    )
  }
}
export default TableBody;
