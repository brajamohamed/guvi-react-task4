import "./home.css";
import Card from "../Card/card";
import { useState, useEffect } from "react";
const Home = (props) => {
  let [todoName, setTodoName] = useState("");
  let [todoDesc, setTodoDesc] = useState("");
  // let [add, setAdd] = useState(false);
  let [todos, setTodos] = useState([]);
  let [key, setKey] = useState(1);
  let [edit, setEdit] = useState(false);
  let [toEdit, setToEdit] = useState({});
  let [status, setStatus] = useState(false);
  let [filterValue, setFilterValue] = useState("All");
  let [filteredTodo, setFilteredTodo] = useState([]);
  let [triggerRender, setRender] = useState(false);

  class Todo {
    constructor(name, desc, key) {
      this.todo_name = name;
      this.todo_desc = desc;
      this.todo_status = "Not Completed";
      this.key = key;
    }
  }
  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  // Add a new Todo
  function addTodo() {
    setKey(key + 1);
    const newTodo = new Todo(todoName, todoDesc, key);
    setTodos((todos) => [...todos, newTodo]);
    setTodoName("");
    setTodoDesc("");
    setRender(true);
  }
  // Edit Todo
  function editTodo(id) {
    const target = todos.find((todo) => todo.key === id);
    if (target) {
      setToEdit(target);
      setTodoName(target.todo_name);
      setTodoDesc(target.todo_desc);
    }
  }
  // Update a existing Todo
  function updateTodo() {
    const updatedTodos = todos.map((todo) => {
      if (todo.key === toEdit.key) {
        return {
          ...todo,
          todo_name: todoName,
          todo_desc: todoDesc,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEdit(false);
    setTodoName("");
    setTodoDesc("");
    setRender(true);
  }
  // Delete a Todo
  function deleteTodo(key) {
    let balanceTodos = todos.filter((todo) => todo.key !== key);
    setTodos(balanceTodos);
    setRender(true);
  }
  //   Set completed status

  let setTodoStatus = (key) => {
    let updatedTods = todos.map((todo) => {
      if (todo.key === key) {
        return {
          ...todo,
          todo_status: "Completed",
        };
      }
      return todo;
    });
    setTodos(updatedTods);
    setRender(true);
    setStatus(true);
  };

  //   Render/Filter Todos
  useEffect(() => {
    let filteredTodos = todos.filter((todo) => {
      if (filterValue == "All") {
        console.log("All Seleted Filter:", filterValue);
        return true;
      } else {
        console.log("Else Seleted Filter:", filterValue);
        return todo.todo_status === filterValue;
      }
    });
    console.log("Todos:", todos);
    console.log("Rendered:", filteredTodos);
    setFilteredTodo(filteredTodos);
    setRender(false);
  }, [filterValue, triggerRender]);

  return (
    <div className="container p-2 border border-3">
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
          {edit === false ? (
            <button onClick={(e) => addTodo()} className="todo_btn w-100">
              Add Todo
            </button>
          ) : (
            <button onClick={(e) => updateTodo()} className="todo_btn w-100">
              Update Todo
            </button>
          )}
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
            <select
              name="filter"
              id="filter"
              className="form-control"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h2>My Todos</h2>
        {filteredTodo.map((todo) => {
          return (
            <div className="col-lg-4" key={todo.key}>
              <Card
                editTodo={editTodo}
                setEdit={setEdit}
                deleteTodo={deleteTodo}
                setTodoStatus={setTodoStatus}
                status={status}
                todo={todo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
