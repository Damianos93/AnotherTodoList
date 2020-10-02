import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateTodo(this.props.id,this.state.task)
    this.setState({
      isEditing:false
    })
  };
  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <>
          <li>{this.props.task}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </>
      );
    }
    return result;
  }
}

export default Todo;
