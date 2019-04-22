import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {

  render() {
    return this.props.todos.map((todo) => (
      <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

export default Todos;