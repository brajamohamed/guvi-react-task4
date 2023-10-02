import "./card.css";
const Card = (props) => {
  const todo = props.todo;
  return (
    <div>
      <div className="card mt-5 m-2">
        <div className="card-body">
          <div className="card-text m-2">Name : {todo.todo_name}</div>
          <div className="card-text m-2">Description: {todo.todo_desc}</div>
          <div className="form-group m-2">
            <label htmlFor="status">Status</label>
            <select className="ms-2" name="status" id="status">
              <option value="notCompleted">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="d-flex justify-content-end me-5">
            <button id="edit" className="m-2">
              Edit
            </button>
            <button id="delete" className="m-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
