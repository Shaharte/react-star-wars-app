import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
class Table extends Component {

  render() {
    const show =this.props.show;
    const people = this.props.people;
    return (
      <table className="table table-bordered table-hover table-dark">
        <TableHead show={show} />
        <TableBody people={people} show={show} />
      </table>
    );
  }
}
export default Table;
