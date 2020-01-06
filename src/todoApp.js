import React from "react";
import TodoItems from "./todoItems";
import "./TodoList.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: []
    };
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    let filteredItems = this.state.items.filter((item) => {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todo">
          <form onSubmit={this.addItem} className="todo__form">
            <input className="todo__form-input" ref={(a) => this._inputElement = a} placeholder="Enter your task">
            </input>
            <button className="todo__form-button" type="submit">Add it up</button>
          </form>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoApp;