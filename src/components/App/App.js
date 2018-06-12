import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';
import myData from '../../data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm : false,
      usersData : myData
    };
  }

  showForm = () => {
    if (this.state.statusForm) {
      return <Form formToogle={ (e) => this.changeStatusForm(e) } add={ (item) => this.addAction(item) }></Form>
    }
  }

  changeStatusForm = (event) => {
    event.preventDefault();
    this.setState({
      statusForm : !this.state.statusForm
    });
  }

  addAction = (item) => {
    this.state.usersData.push(item);

    this.setState({
      usersData : this.state.usersData
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav></Nav>
          <div className="row">
            <Table usersData={ this.state.usersData } statusForm={ this.state.statusForm } formToogle={ (e) => this.changeStatusForm(e) }></Table>
            { this.showForm() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
