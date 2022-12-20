function Todo(props) {
  //Name o function should start with Capital letter. To differentiatefrom inbuilt components

  function deleteHandler()
  {
        console.log("clicked here")
        console.log(props.text)
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
