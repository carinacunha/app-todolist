import React, { Component } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Tasks extends Component {
  render() {
    return (
      <div className="content">
        <Form />
        <Table />
      </div>  
    )
  }
}
