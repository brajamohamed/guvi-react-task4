import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/home";

function App() {
  class Todo {
    constructor(name, desc) {
      this.todo_name = name;
      this.todo_desc = desc;
    }
  }
  function handleClick(todo_data) {
    const newTodo = new Todo(todo_data.name, todo_data.desc);
  }

  const todos = [
    {
      todo_name: "todo1",
      todo_desc: "Wake up",
      todo_status: "not completed",
    },
    {
      todo_name: "todo2",
      todo_desc: "Eat",
      todo_status: "not completed",
    },
    {
      todo_name: "todo3",
      todo_desc: "Get the cab, go to office",
      todo_status: "not completed",
    },
  ];
  return (
    <div className="App">
      <Home todos={todos} handleClick={handleClick} />
    </div>
  );
}

export default App;
