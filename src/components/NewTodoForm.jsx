import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleChange = (e) => {
    const {name,value}=e.target
    this.setState({
        [name]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
        // const todos=[...this.state,uuidv4()]
        this.props.newTodo({...this.state,id:uuidv4()})
        this.setState({
            task:""
        })


  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        id="task"
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ToDoList;
