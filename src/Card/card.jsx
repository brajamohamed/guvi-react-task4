import "./card.css";
const Card = (props) => {
  const { editTodo, deleteTodo, setEdit, todo } = props;

  function handleEdit(key) {
    setEdit(true);
    editTodo(key);
  }
  function handleDelete(key) {
    deleteTodo(key);
  }
  return (
    <div>
      <div className="card mt-5 m-2">
        <div className="card-body">
          <div className="card-text m-2">Key : {todo.key}</div>

          <div className="card-text m-2 text-primary">
            Name : {todo.todo_name}
          </div>
          <div className="card-text m-2 text-danger">
            Description: {todo.todo_desc}
          </div>
          <div className="form-group m-2">
            <label htmlFor="status">Status</label>
            <select className="ms-2" name="status" id="status">
              <option value="notCompleted">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-end me-5">
            <button
              id="edit"
              className="m-2"
              onClick={() => handleEdit(todo.key)}
            >
              Edit
            </button>
            <button
              id="delete"
              className="m-2"
              onClick={() => handleDelete(todo.key)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
