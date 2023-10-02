import "./home.css";
import Card from "../Card/card";
import { useState } from "react";
const Home = (props) => {
  let [todoName, setTodoName] = useState("");
  let [todoDesc, setTodoDesc] = useState("");
  let [todos, setTodos] = useState([]);
  let [status, setStatus] = useState("");
  let [key, setKey] = useState(0);

  class Todo {
    constructor(name, desc, key) {
      this.todo_name = name;
      this.todo_desc = desc;
      this.todo_status = "Not Completed";
      this.key = key;
    }
  }

  function handleClick(e) {
    setKey(key + 1);
    const newTodo = new Todo(todoName, todoDesc, key);
    console.log(newTodo);
    setTodos((todos) => [...todos, newTodo]);
    setTodoName("");
    setTodoDesc("");
  }
  return (
    <div className="container">
      <h2 className="text-center heading my-2">My todo</h2>

      <div className="row mx-2 my-5">
        <input
          className="col-lg-4 mt-1 me-1 todo_input"
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Todo Name"
        />
        <input
          className="col-lg-5 mt-1 me-1 todo_input"
          type="text"
          value={todoDesc}
          onChange={(e) => setTodoDesc(e.target.value)}
          placeholder="Todo Description"
        />
        <div className="col-lg-2 mt-1 me-1 todo_btn ">
          <button onClick={handleClick} className="todo_btn w-100">
            Add Todo
          </button>
        </div>
      </div>
      <div className="row form-group">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-lg-2">
            <label htmlFor="filter">
              <h5>Status Filter : </h5>
            </label>
          </div>
          <div className="col-lg-2">
            <select name="filter" id="filter" className="form-control">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="NotCompleted">Not Completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h2>My Todos</h2>
        {todos.map((todo) => {
          return (
            <div className="col-lg-4">
              <Card key={todo.key} todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
