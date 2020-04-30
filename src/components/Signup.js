import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/currentUser';
import { Form, Label, Input, Button, Card, CardHeader, CardBody, FormText } from 'reactstrap';


class Signup extends Component {

  state = {
    email: "",
    name: "",
    password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //the part where wordcount gets submitted somewhere!
    console.log(this.state)
    this.props.signup(this.state)
    this.setState({
      email: "",
      name: "",
      password: ""
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>Sign Up:</CardHeader>
        <CardBody>

          <Form onSubmit={this.handleSubmit}>
            <Label for="email">email:</Label>
            <Input required id="email" onChange={this.handleChange} name="email" placeholder="email" type="email" value={this.state.email}/>
            <FormText>You will use this to log in.</FormText>
            <Label for="name">Name:</Label>
            <Input required id="name" onChange={this.handleChange} name="name" placeholder="name" type="text" value={this.state.name}/>
            <FormText>This will be displayed to other users along with your novel.</FormText>
            <Label for="password">Password:</Label>
            <Input required id="password" onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
            <Button type="secondary">Sign Up</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: credentials => dispatch(signup(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Signup);

