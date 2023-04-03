import React, { Component } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Tasks extends Component {
  render() {
    return (
      <section className="content">
        <Form />
        <div className="table-img">
          <Table />
          <img
          className="img-task"
          src={require('../task.png')}
          alt="not found"
        />
        </div>
      </section>  
    )
  }
}
