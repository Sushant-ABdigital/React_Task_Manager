import React from "react";
import "../App.css";

class Todo extends React.Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.isDone ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p className="task">
          <input type="checkbox" className="input-checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
          {this.props.todo.task}
          <button className="delButton" onClick={this.props.delTodo.bind(this, this.props.todo.id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

export default Todo;
