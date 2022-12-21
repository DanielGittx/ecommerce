import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //Name o function should start with Capital letter. To differentiatefrom inbuilt components

  const [modalIsOpen, setModalIsOpen] = useState(false); //React Hook in component

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>)} 
      {modalIsOpen && <Backdrop onConfirm={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
