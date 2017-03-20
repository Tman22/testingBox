import React, { Component } from 'react';

export default class CreatePlayer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange(e, key) {
    const { value } = e.target;

    this.setState({ [key]: value });
  }

  handleClick() {
    this.props.submitPlayer(this.state);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <div className='createField'>
        Name:
        <input value={this.state.title} onChange={(e) => this.handleChange(e, 'title') }/>
        <br/>
        Body:
        <input value={this.state.body} onChange={(e) => this.handleChange(e, 'body') }/>
        <br/>
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    )
  }
}
