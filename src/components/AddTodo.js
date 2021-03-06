import React from 'react';

class AddTodo extends React.Component{
  state = {
    title: ''
  }
  onChange=(e)=>{
    this.setState({
      title: e.target.value
    })
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render(){
    return(
      <form className="addition" onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add your task to complete..." className="addition-input" value={this.state.title} onChange={this.onChange}/>
        <input type="submit" value="submit" className="btn addition-btn"/>
      </form>
    )
  }
}

export default AddTodo;