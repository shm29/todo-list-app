import React from "react";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li className="todo__list-item" onClick={()=> this.delete(item.key)} key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="todo__list">
        {listItems}
      </ul>
    );
  }
}

export default TodoItems;