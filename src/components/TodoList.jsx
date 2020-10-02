import React, { Component } from "react";
import Todo from "./ToDo";
import NewTodoForm from "./NewTodoForm";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Something Cool" }, { task: "Something Cooler" }],
    };
  }
  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((el) => el.id !== id),
    });
  };

  handleCreate = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  };
  render() {
    const todos = this.state.todos.map((el) => (
      <Todo
        id={el.id}
        removeTodo={this.remove}
        key={el.id}
        task={el.task}
        updateTodo={this.update}
      />
    ));
    return (
      <div>
        <NewTodoForm newTodo={this.handleCreate} />
        {todos}
      </div>
    );
  }
}

export default ToDoList;
