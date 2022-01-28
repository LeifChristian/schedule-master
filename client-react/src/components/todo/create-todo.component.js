import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoName = this.onChangeTodoName.bind(this);
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      todo_description: "",
      todo_priority: "",
      todo_actions: false,
    };
  }

  onChangeTodoName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.name}`);
    console.log(`Todo Responsible: ${this.state.todo_description}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    // const newTodo = {
    //   name: this.state.name,
    //   description: this.state.todo_description,
    //   priority: this.state.todo_priority,
    // };

    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/todo/create",
        {
          name: this.state.name,
          description: this.state.todo_description,
          priority: this.state.todo_priority,
        },

        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((result) => console.log(result));
    alert("Project " + this.state.project_title + " created!");

    this.setState({
      name: "",
      todo_priority: "",
      todo_description: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_name}
              onChange={this.onChangeTodoName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-danger"
            />
          </div>
        </form>
      </div>
    );
  }
}
