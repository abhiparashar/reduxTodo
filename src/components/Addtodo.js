import React from "react";
import {addTodo} from '../action/index';
import { connect } from "react-redux";

const Addtodo = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let input  = e.target.userInput.value;
    props.dispatch(addTodo(input));
  };
  return (
    <div>
      <label>Todo List</label>
      <form onSubmit={submitHandler}>
        <input type="text"
         placeholder="add your task here"
         name="userInput"
          />
          <button>Submit</button>
      </form>
    </div>
  );
};

export default connect()(Addtodo);
