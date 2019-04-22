import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        task: "Plant the seeds",
        isDone: false
      },
      {
        id: uuid.v4(),
        task: "Go to park",
        isDone: false
      },
      {
        id: uuid.v4(),
        task: "Learn to code",
        isDone: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    });
  };
  delTodo = id => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  };
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      task: title,
      isDone: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}
            />
            <Route
              path="/about"
              component={About}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
